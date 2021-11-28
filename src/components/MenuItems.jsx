import { useLocation } from "react-router";
import { Menu } from "antd";
import { NavLink } from "react-router-dom";

function MenuItems() {
  const { pathname } = useLocation();

  return (
    <Menu
      theme="light"
      mode="horizontal"
      style={{
        display: "flex",
        fontSize: "17px",
        fontWeight: "500",
        width: "100%",
        justifyContent: "center",
        background: "#a13aa7",
      }}
      defaultSelectedKeys={[pathname]}
    >
      <Menu.Item key="/quickstart">
        <NavLink to="/">🚀 Home</NavLink>
      </Menu.Item>
      <Menu.Item key="addcoin">
              <NavLink to="/addcoin">Addcoin</NavLink>
            </Menu.Item>
            <Menu.Item key="promote">
              <NavLink to="/promote">Promote</NavLink>
            </Menu.Item>
            <Menu.Item key="DYOR">
              <NavLink to="/dyor">DYOR</NavLink>
            </Menu.Item>
            <Menu.Item key="airdrop">
              <NavLink to="/airdrop"> Airdrop</NavLink>
            </Menu.Item>
      <Menu.Item key="/wallet">
        <NavLink to="/wallet">👛 Wallet</NavLink>
      </Menu.Item>
      <Menu.Item key="/1inch">
        <NavLink to="/1inch">🏦 Dex</NavLink>
      </Menu.Item>
      <Menu.Item key="/erc20balance">
        <NavLink to="/erc20balance">💰 Balances</NavLink>
      </Menu.Item>
      <Menu.Item key="/erc20transfers">
        <NavLink to="/erc20transfers">💸 Transfers</NavLink>
      </Menu.Item>
      <Menu.Item key="/nftBalance">
        <NavLink to="/nftBalance">🖼 NFTs</NavLink>
      </Menu.Item>
      <Menu.Item key="/contract">
        <NavLink to="/contract">📄 Contract</NavLink>
      </Menu.Item>
    </Menu>
  );
}

export default MenuItems;
