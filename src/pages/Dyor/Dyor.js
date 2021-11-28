import { useSelector } from "react-redux";

function Dyor(){

    const {isDarkMode} = useSelector(state => state.theme)

    return(
        <div className="dyor-Mainwrapper">
            <div className="mainWrapper-boxContainer"  style={{backgroundColor:isDarkMode ? `#272727` : `white`, color: isDarkMode? `white`: `black`}}>
                <div className="mainWrapper-box">
                    <h1>DYOR</h1>
                    <h2>But how? How to do your own research?</h2>
                    <p>Warning: There is absolutely no financial advice on this or on any other pages of this website.<br/>This is an article to explain how to do your own research.</p>
                    <br/>
                    <p>Without reading the solidity code of the contract you will never have 100% insurance on how a coin works, if it may be a scam or not. Investing in early crypto coin projects is equal to taking huge risks with your money.
                        That being said, if you still want to try, below are a few reasonable things to do before doing a presale or buying a new crypto coin.</p>
                    <br/>

                    <p><strong>To begin with, security audits are very important to check but you also need to verify the audits legitimacy too.</strong>However, most new coins have not been audited so you will need to do your own research.</p>

                    <br/>

                    <p><strong>First point: always check the contract address of the coin you are buying. Is this the same one you saw on Jammabeans.com?</strong><br/>Before listing coins on the Jamma Beans game, we do a little deeper check into the contract code and LP for you. Only contracts that we approve will be used in the Games. As for the general voting of projects we do review them and try to eliminate scams (not a 100% science as we do not read the code for general votes) as much as we can. </p>

                    <br /><br />
                    <strong>Here are some other important points to check:</strong>
                    <br /><br />
                    <strong>Vote Value:</strong><p>Vote value is a in house Jamma Bease metric that displays the average value of a vote based on the users native balance at the time of the vote.  A low value is a sign that voters do not hold much crypto in their wallet, whereas a high value shows voters held some value in crypto at the time of voting.  </p>
                    <br /><br />
                    <strong>Telegram:</strong><p>Check if the number of members in the tg group is botted or not. You can clearly see this by comparing the number of online members to the total number of members. If a telegram group has 8000 members but only a 100 online, chances are very high that it is botted, you may want to run away from these communities too..</p>
                    <br /><br />
                    <strong>Bscscan:</strong><p> Check the "Holder" tab, try to see the percentage the top holders have, if a wallet has more than 10% you may want to consider this too risky to invest. This wallet could sell all of their coins, and it could have a huge impact (generally downwards) on the price. This can also cause panic and ultimately make everyone sell whatever they have. There are exceptions to this rule, for example:</p>
                    <ul className="mainWrapper-box-ul">
                        <li>the locked pancakeswap liquidity</li>
                        <li>0x000...00dead address which is for burning coins, meaning that noone can ever sell those coins</li>
                        <li>in case of presale/prelaunch, the presale wallet can also have more than 10% (presales are obviously always more risky investments)

                        </li>
                    </ul>

                    <br /><br />
                    <strong>Poocoin:</strong><p>You can scan two particular scams via this website. You can check if there is a red warning message under the LP box, this box says something along "liquidity is not locked, the dev can take everything if they wish". In that case, this coin can be a future rugpull, you may wanna run away. On poocoin, you can also check for honeypots. Under the graph, you have all the sell and buy orders, check if different addresses are able to sell. Honeypot is a particular scam, where the developer has put a rule that only allows particular wallet adresses to sell, so if you only see buy orders and only a few sell orders (generally huge dumps), you may want to run away.</p>
                    <br /><br />
                    <strong>Other than these more technical points, </strong><p>a management and developer team that communicates properly and that is transparent, an always working website, clean social media accounts that are professionally managed are all good points to check before considering if you should run away or not.</p>

                </div>
            </div>
        </div>
    );
}

export default Dyor;