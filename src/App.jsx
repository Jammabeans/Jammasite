import { useEffect } from "react";
import { useMoralis } from "react-moralis";
import { BrowserRouter as Router, Switch, Route, Redirect, Link } from "react-router-dom";
import Account from "components/Account";
import Chains from "components/Chains";
import TokenPrice from "components/TokenPrice";
import ERC20Balance from "components/ERC20Balance";
import ERC20Transfers from "components/ERC20Transfers";
import InchDex from "components/InchDex";
import InchDexCustom from "components/InchDex/InchDexCustom";
import NFTBalance from "components/NFTBalance";
import Wallet from "components/Wallet";
import { Layout, Tabs, Menu } from "antd";
import "antd/dist/antd.css";
import NativeBalance from "components/NativeBalance";
import "./style.css";
import "./sass/main.scss"
import QuickStart from "components/QuickStart";
import Contract from "components/Contract/Contract";
import Text from "antd/lib/typography/Text";
import Ramper from "components/Ramper";
import MenuItems from "./components/MenuItems";
import LandingPage from "./pages/landingpage/LandingPage";
import AddCoin from "./pages/addCoin/AddCoin";
import Admin from "./pages/admin/Admin";
import AirDrop from "./pages/airdrop/AirDrop";
import Profile from "./pages/profile/Profile";
import Promote from "./pages/promote/Promote";
import Coin from "./pages/coin/Coin";
import Dyor from "./pages/Dyor/Dyor";
import PrivacyPolicy from "./pages/PrivacyPolicy/PrivacyPolicy";
import Terms from "./pages/terms/Terms";
import Disclaimer from './pages/Disclamer/Disclaimer'

import {useSelector} from 'react-redux';
import { useDispatch } from "react-redux";
import { reactLocalStorage } from "reactjs-localstorage";
import { login, userActions } from "./Redux/userSlice/userSlice";
import { createNotification, NOTIFICATION_TYPE_ERROR, Notify } from 'react-redux-notify';
import { useMoralisDapp } from "providers/MoralisDappProvider/MoralisDappProvider";
import {Helmet} from 'react-helmet'

const { Header, Footer } = Layout;

const styles = {
  content: {
    display: "flex",
    justifyContent: "center",
    fontFamily: "Roboto, sans-serif",
    color: "#041836",
    marginTop: "130px",
    padding: "10px",
    
  },
  header: {
    position: "fixed",
    zIndex: 1,
    width: "100%",
    background: "#a13aa7",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    fontFamily: "Roboto, sans-serif",
    borderBottom: "2px solid rgba(0, 0, 0, 0.06)",
    padding: "0 10px",
    boxShadow: "0 1px 10px rgb(151 164 175 / 10%)",
  },
  headerRight: {
    display: "flex",
    gap: "20px",
    alignItems: "center",
    fontSize: "15px",
    fontWeight: "600",
    
  },
};
const App = ({ isServerInfo }) => {
  const { isWeb3Enabled, enableWeb3, isAuthenticated, isWeb3EnableLoading } = useMoralis();
  const {user: userValue} = useSelector(state => state.user)
  const dispatch = useDispatch()
  const { walletAddress } = useMoralisDapp();
  let ff;

  useEffect( () => {
    if (isAuthenticated && !isWeb3Enabled && !isWeb3EnableLoading) enableWeb3();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    const publicKey = walletAddress;
    console.log(publicKey)
    if(isAuthenticated){

      window.ethereum
          .request( { method: 'eth_requestAccounts' } )
          .then( accounts => {
            console.log(accounts[0])
            console.log(publicKey)
            if(accounts[0] === publicKey){
              const {payload } =  dispatch( login(publicKey));
              ff = payload
            }
            else{
              dispatch(createNotification({
                message: 'Your Account is Changed - Login Again',
                type: NOTIFICATION_TYPE_ERROR,
                duration: 4000,
              }))
              reactLocalStorage.remove('publicKey')
            }
        })
          .catch(err => {
            console.log(err)
        })

      // web3.eth.getAccounts((error,accounts) => {
      //   if (error) {
      //       console.log(error);
      //   } else 
      // })
    }
    reactLocalStorage.set('publicKey', walletAddress)
  }, [isAuthenticated, isWeb3Enabled]);

  useEffect(() => {
    console.log(userValue)
    ff = userValue
    console.log(userValue)

  }, [userValue])


  return (
    <Layout style={{ height: "100vh", overflow: "auto" }}>
      <Router>
        <Header style={styles.header}>
        <div>
        <Link to="/" className="navbar__logo">
                    <img className="navbar__logo__image" src="/logo.png" alt="" />
                    <span> Jamma Beans </span>
                </Link>
                </div>
       
          
          
          <MenuItems  />
          <div style={styles.headerRight}>
            <Chains />
            <TokenPrice
              address="0xc66cb95e814c10194313096c2dd660e77cf9b2de"
              chain="bsc"
              image="logo.png"
              size="40px"
            />
            <NativeBalance />
            <Account />
          </div>
        </Header>

        <div style={styles.content}>
          {!isAuthenticated ? (
            <>Please login using the "Authenticate" button</>
          ) : (
            <Switch>
              <Route path="/" exact component ={LandingPage} />
              <Route path="/quickstart">
                <QuickStart isServerInfo={isServerInfo} />
              </Route>
              <Route path="/wallet">
                <Wallet />
              </Route>
              <Route path="/1inch">
                <Tabs defaultActiveKey="1" style={{ alignItems: "center" }}>
                  <Tabs.TabPane tab={<span>Ethereum</span>} key="1">
                    
                    <InchDexCustom chain="bsc" toTokenAddress="0xc66cb95e814c10194313096c2dd660e77cf9b2de" slippage={12}/>
                  </Tabs.TabPane>
                 
                </Tabs>
              </Route>
              <Route path="/erc20balance">
                <ERC20Balance />
              </Route>
              <Route path="/onramp">
                <Ramper />
              </Route>
              <Route path="/erc20transfers">
                <ERC20Transfers />
              </Route>
              <Route path="/nftBalance">
                <NFTBalance />
              </Route>
              <Route path="/contract">
                <Contract />
              </Route>
              <Route exact path="/">
                <Redirect to="/quickstart" />
              </Route>
              <Route path="/nonauthenticated">
                <>Please login using the "Authenticate" button</>
              </Route>
              <Route path="/addcoin">
            <Helmet>
              <title>AddCoin - JammaBeans</title>
            </Helmet>
            <AddCoin />
          </Route>
          <Route path="/profile">
            <Helmet>
              <title>Profile - JammaBeans</title>
            </Helmet>
            <Profile />
          </Route>
          <Route path="/coin/:coinId">
            <Helmet>
              <title>Coin Detail - JammaBeans</title>
            </Helmet>
            <Coin />
          </Route>
          <Route path="/airdrop">
            <Helmet>
              <title>Airdrop - JammaBeans</title>
            </Helmet>
            <AirDrop />
          </Route>
          <Route path="/promote">
            <Helmet>
              <title>Promote - JammaBeans</title>
            </Helmet>
            <Promote />
          </Route>
          <Route path="/dyor">
            <Helmet>
              <title>DYOR - JammaBeans</title>
            </Helmet>
            <Dyor />
          </Route>
          <Route path="/disclaimer">
            <Helmet>
              <title>Disclaimer - JammaBeans</title>
            </Helmet>
            <Disclaimer />
          </Route>
          <Route path="/privacypolicy">
            <Helmet>
              <title>Privacy Policy - JammaBeans</title>
            </Helmet>
            <PrivacyPolicy />
          </Route>
          <Route path="/terms">
              <Helmet>
              <title>Terms - JammaBeans</title>
            </Helmet>
            <Terms />
          </Route>
          <Route path="/admin">
              <Helmet>
              <title>Adminpage - JammaBeans</title>
            </Helmet>
            <Admin />
          </Route>
          <Route path= "/*">
            <div> error 404 </div>
          </Route>
            </Switch>
          )}
        </div>
      </Router>
      <Footer style={{ textAlign: "center" }}>
        
      </Footer>
    </Layout>
  );
};




export default App;
