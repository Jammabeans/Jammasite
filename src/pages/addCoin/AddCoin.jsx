import axios from 'axios'
import React, { useRef } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {createNotification, NOTIFICATION_TYPE_SUCCESS, NOTIFICATION_TYPE_ERROR, NOTIFICATION_TYPE_INFO} from 'react-redux-notify'
function AddCoin() {

    const {isDarkMode} = useSelector(state => state.theme)
    const { user } = useSelector(state => state.user)

    const name = useRef()
    const symbol = useRef()
    const description = useRef()
    const logo = useRef()
    const price = useRef()
    const marketCap = useRef()
    const launchDate = useRef()
    const isPresale = useRef()
    const binanceSmartChainId = useRef()
    const websiteUrl = useRef()
    const telegramUrl = useRef()
    const twitterUrl = useRef()
    const additionalInformation = useRef()

    const dispatch = useDispatch()

    const submitCoin = () =>{
        if(!user){
            dispatch(createNotification({
                message: 'Login to Add Coin',
                type: NOTIFICATION_TYPE_ERROR,
                duration: 4000,
            }))
            return 0
        }

        if(name.current.value.length < 1){
            name.current.setCustomValidity('Your Name is Required')
            name.current.reportValidity()
            return
        }
        if(binanceSmartChainId.current.value.length < 1){
            websiteUrl.current.setCustomValidity('Please Enter your Binance Smart Chain Id')
            websiteUrl.current.reportValidity()
            return
        }
        if(symbol.current.value.length < 1){
            symbol.current.setCustomValidity('Coin Symbol is Required')
            symbol.current.reportValidity()
            return
        }
        if(websiteUrl.current.value.length < 1){
            websiteUrl.current.setCustomValidity('Website url is Required')
            websiteUrl.current.reportValidity()
            return
        }
        
        dispatch(createNotification({
            message: 'Pleas Wait...',
            type: NOTIFICATION_TYPE_INFO,
            duration: 4000,
        }))
        
        axios.post('http://localhost:4000/v1/coins',{
            name: name.current.value,
            symbol: symbol.current.value,
            description: description.current.value,
            logo: logo.current.value,
            price: price.current.value || 0,
            marketCap: marketCap.current.value || 0,
            binanceSmartChain: binanceSmartChainId.current.value,
            launchDate:launchDate.current.value,
            isPresale: isPresale.current.checked,
            websiteUrl: websiteUrl.current.value,
            twitterUrl: twitterUrl.current.value,
            telegramUrl: telegramUrl.current.value,
            additionalInformation: additionalInformation.current.value,
            userId: user._id
        })
        .then( (_) =>{
            dispatch(createNotification({
                message: 'Coin Submitted For review',
                type: NOTIFICATION_TYPE_SUCCESS,
                duration: 4000,
            }))
        })

        
        

    }







    return (
        <div className="addCoin-container" style={{color:isDarkMode ? "white" : "black"}}>
            <div className="addCoin__header">
                    <h2>Coin listing request</h2>
                </div>
            <div className="addCoin" style={{backgroundColor: isDarkMode ? `#272727` : `white`}}>
                <div className="addCoin-innerContainer">
                    <div className="addCoin__col">
                        <h2>Coin informations</h2>
                        <div className="addCoin__col__item">
                            <p>Name <span>Required</span></p>
                            <input ref={name} style={{backgroundColor: isDarkMode ? `#272727` : `white`, color: isDarkMode ? `white` : `black`}} type="text" className="addCoin__col__item__input" placeholder="Ex: Bitcoin" />
                        </div>
                        <div className="addCoin__col__item">
                            <p>Symbol <span>Required</span></p>
                            <input ref={symbol} style={{backgroundColor: isDarkMode ? `#272727` : `white`, color: isDarkMode ? `white` : `black`}} type="text" className="addCoin__col__item__input" placeholder="Ex: BTC" />
                        </div>
                        <div className="addCoin__col__item">
                            <p>Description</p>
                            <textarea ref={description} style={{backgroundColor: isDarkMode ? `#272727` : `white`, color: isDarkMode ? `white` : `black`}} type="text" rows={7} className="addCoin__col__item__input" placeholder="Ex: Bitcoin is a decentralized digital currency" />
                        </div>
                        <div className="addCoin__col__item">
                            <p>Logo</p>
                            <input ref={logo} style={{backgroundColor: isDarkMode ? `#272727` : `white`, color: isDarkMode ? `white` : `black`}} type="text" className="addCoin__col__item__input" placeholder="Ex: https://i.ibb.co/logo.png" />
                        </div>
                        <div className="addCoin__col__item">
                            <p>Price</p>
                            <div className="addCoin__col__item__input-group">
                                <span>$</span>
                                <input ref={price} style={{backgroundColor: isDarkMode ? `#272727` : `white`, color: isDarkMode ? `white` : `black`}} type="number" className="addCoin__col__item__input__input" placeholder="Ex:0.006"/>
                            </div> 
                        </div>
                        <div className="addCoin__col__item">
                            <p>Market cap</p>
                            <div className="addCoin__col__item__input-group">
                                <span>$</span>
                                <input ref={marketCap} style={{backgroundColor: isDarkMode ? `#272727` : `white`, color: isDarkMode ? `white` : `black`}} type="number" className="addCoin__col__item__input__input" placeholder="Ex:15000"/>
                            </div> 
                        </div>
                        <div className="addCoin__col__item">
                            <p>Launch Date</p>
                            <input ref={launchDate} style={{backgroundColor: isDarkMode ? `#272727` : `white`, color: isDarkMode ? `white` : `black`}} type="datetime-local" className="addCoin__col__item__input" placeholder="Ex: BTC"/>
                        </div>
                        <div className="addCoin__col__item">
                            <div className="addCoin__col__item__checkbox">
                                <input ref={isPresale} style={{backgroundColor: isDarkMode ? `#272727` : `white`, color: isDarkMode ? `white` : `black`}} type="checkbox" id="presale"/>
                                <label for="presale">Presale</label>
                            </div>
                        </div>
                    </div>
                    <div className="addCoin__col">
                    <h2>Coin contracts</h2>
                    <div className="addCoin__col__item">
                            <p>Binance Smart Chain<span>Required</span></p>
                            <div className="addCoin__col__item__input-group">
                                <img alt="logo" src="https://cryptologos.cc/logos/binance-coin-bnb-logo.png" />
                                <input ref={binanceSmartChainId} style={{backgroundColor: isDarkMode ? `#272727` : `white`, color: isDarkMode ? `white` : `black`}} type="text" className="addCoin__col__item__input__input" placeholder="Ex:0x000000000000000000000"/>
                            </div> 
                    </div>
                    <h2>Coin Links</h2>
                    <div className="addCoin__col__item">
                            <p>Website<span>Required</span></p>
                            <div className="addCoin__col__item__input-group">
                                <img alt="logo" src="https://www.pngmart.com/files/8/Website-PNG-HD.png" />
                                <input ref={websiteUrl} style={{backgroundColor: isDarkMode ? `#272727` : `white`, color: isDarkMode ? `white` : `black`}} type="text" className="addCoin__col__item__input__input" placeholder="Ex: https://www.bitcoin.com"/>
                            </div> 
                    </div>
                    <div className="addCoin__col__item">
                            <p>Telegram</p>
                            <div className="addCoin__col__item__input-group">
                                <img alt="logo" src="https://coinhunt.cc/_next/image?url=%2Fresources%2FImages%2FtelegramIcon.png&w=32&q=100" />
                                <input ref={telegramUrl} style={{backgroundColor: isDarkMode ? `#272727` : `white`, color: isDarkMode ? `white` : `black`}} type="text" className="addCoin__col__item__input__input" placeholder="Ex: https://t.me/bitcoin"/>
                            </div> 
                    </div>
                    <div className="addCoin__col__item">
                            <p>Twitter</p>
                            <div className="addCoin__col__item__input-group">
                                <img alt="logo" src="https://static.cdnlogo.com/logos/t/96/twitter-icon.svg" />
                                <input ref={twitterUrl} style={{backgroundColor: isDarkMode ? `#272727` : `white`, color: isDarkMode ? `white` : `black`}} type="text" className="addCoin__col__item__input__input" placeholder="Ex: https://www.twitter.com/coinhuntCC"/>
                            </div> 
                    </div>
                    <h2>Additional informations</h2>
                    <div className="addCoin__col__item">
                            <textarea ref={additionalInformation} style={{backgroundColor: isDarkMode ? `#272727` : `white`, color: isDarkMode ? `white` : `black`}} type="text" rows={7} className="addCoin__col__item__input" placeholder="Other links, other blockchain contracts or anything else you would like to add to your coin request"/>
                    </div>
                </div>


                </div>
                <button onClick={ submitCoin } className="addCoin__button">Submit</button>

                <div className="addCoin__requirement-container">
                    <h2>Listing requirements</h2>
                    <div className="addCoin__requirement">
                        <h3 className="addCoin__requirement__item">Valid contract address</h3>
                        <h3 className="addCoin__requirement__item">Working website where we can check the contract address</h3>
                        <h3 className="addCoin__requirement__item">Locked liquidity</h3>
                        <h3 className="addCoin__requirement__item">Reasonable holding of supply</h3>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AddCoin
