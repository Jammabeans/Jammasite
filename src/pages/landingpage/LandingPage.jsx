import React, { useEffect, useState } from 'react'
import CoinTable from "../../components/coinTable/CoinTable"
import roadmap from './ROADMAP.png'
import {AiOutlineLineChart} from 'react-icons/ai'
import axios from 'axios'
import LoadingIndicator from '../../components/LoadingIndicator/LoadingIndicator'
import {Helmet} from 'react-helmet'


function LandingPage() {

    const [selectedOption, setSelectedOption] = useState(1)
    const [coinData, setCoinData] = useState([])
    const [page, setPage] = useState(0)
    const [showViewMoreButton, setShowViewMoreButton] = useState(true)
    const [loading, setLoading] = useState(false)
    
    
    
    
    useEffect(async() => {
        setShowViewMoreButton(false)
        if(selectedOption === 1){
            const {data} = await axios.get(`http://localhost:4000/v1/coins/normalVotes/${page}`)
            setCoinData([...coinData,...data])
            setLoading(false)
            if(data.length < 1 || data.length < 10){
                setShowViewMoreButton(false)
            }
            else{
                setShowViewMoreButton(true)
            }
        }
        else if(selectedOption === 2){
            const {data} = await axios.get(`http://localhost:4000/v1/coins/silverVotes/${page}`)
            setCoinData([...coinData,...data])
            setLoading(false)
            if(data.length < 1 || data.length < 10){
                setShowViewMoreButton(false)
            }
            else{
                setShowViewMoreButton(true)
            }
        }
        else if(selectedOption === 3){
            const {data} = await axios.get(`http://localhost:4000/v1/coins/goldVotes/${page}`)
            setCoinData([...coinData,...data])
            setLoading(false)
            if(data.length < 1 || data.length < 10){
                setShowViewMoreButton(false)
            }
            else{
                setShowViewMoreButton(true)
            }
        }
        else if(selectedOption === 4){
            //alert("Jamma Votes")
        }
    }, [selectedOption, page])


    return (
        <>
            <Helmet>
                    {
                        selectedOption === 0 ?
                            <title>JammaBeans</title>
                        : selectedOption === 1 ?
                            <title>Normal Votes - JammaBeans</title>
                        : selectedOption === 2 ?
                            <title>Silver Votes - JammaBeans</title>
                        : selectedOption === 3 ?
                            <title>Gold Votes - JammaBeans</title>
                        : selectedOption === 4 ?
                            <title>Jamma Votes - JammaBeans</title>
                        : 
                        <title>JammaBeans</title>
                    }
            </Helmet>
            <div className="landingPage">
                <div className="landingPage-container">
                    
                    <div className="landingPage__selectors">
                        <p onClick={() => {setSelectedOption(1); setPage(0); setCoinData([]) }} className={`landingPage__selectors__button ${selectedOption === 1 ? `landingPage__selectors__button-selected` : ``}`}>Normal Votes</p>
                        <p onClick={() => {setSelectedOption(2); setPage(0); setCoinData([]) }} className={`landingPage__selectors__button ${selectedOption === 2 ? `landingPage__selectors__button-selected` : ``}`}>Silver Votes</p>
                        <p onClick={() => {setSelectedOption(3); setPage(0); setCoinData([]) }} className={`landingPage__selectors__button ${selectedOption === 3 ? `landingPage__selectors__button-selected` : ``}`}>Golden Votes</p>
                        <p onClick={() => {setPage(0); setCoinData([]);setSelectedOption(4) }} className={`landingPage__selectors__button ${selectedOption === 4 ? `landingPage__selectors__button-selected` : ``}`}>Jamma Votes</p>
                    </div>
                    <div className="landingPage__tableContent">
                        <CoinTable coinData = {coinData} setCoinData = {setCoinData} slectedOption = {selectedOption}/>
                        {
                            loading &&
                            <LoadingIndicator />
                        }
                        {
                            showViewMoreButton &&
                            <button className="landingPage__tableContent__button" onClick={ () => {setPage(page + 1); setLoading(true)}}>Load More</button>
                        }
                    </div>

                    <div className="landingPage__about">
                        <h1 className="landingPage__about__header">About Jamma Beans</h1>

                        <div className="landingPage__about__cards">
                            <div className="landingPage__about__cards__item">
                                <h2>The Jamma Beans</h2>
                                <p>BEP-20 token Address : <a href="https://bscscan.com/token/0xc66CB95E814C10194313096C2Dd660E77cf9B2de">0xc66CB95E814C10194313096C2Dd660E77cf9B2de</a></p>
                                <p>Total Supply :  100,000,000,000,000 </p>
                                <p>50% will be added to the pancake swap LP.</p>
                                <p>25% will be burnt.</p>
                                <p>21% will be used in the air drops.</p>
                                <p>2% Marketing fund.</p>
                                <p>2% Dev fund.</p>
                            </div>
                            <div className="landingPage__about__cards__item">
                                <h2>10 % fee on all transactions</h2>
                                <p>3% LP</p>
                                <p>3% Reflection</p>
                                <p>2% Marketing Fund.</p>
                                <p>2% Dev Fund</p>
                                <p>LP locked 5 years. <a href="https://dxsale.app/app/pages/dxlockview?id=0&add=0xa6252CD5baea1FFe71c97328Dc61fEf3A331D13D&type=lplock&chain=BSC">Link</a></p>
                                
                            </div>
                            <div className="landingPage__about__cards__item">
                                <a className="landingPage__about__cards__item__button" href=""><AiOutlineLineChart className="landingPage__about__cards__item__button__icon"/> Chart</a>
                                <h2>Buy Now</h2>
                                <a className="landingPage__about__cards__item__button" href="https://poocoin.app/swap?outputCurrency=0xc66cb95e814c10194313096c2dd660e77cf9b2de"><img className="landingPage__about__cards__item__button__image" src="https://assets.coingecko.com/coins/images/14855/large/w4_9ayk3_400x400.png?1618802191" alt="" /> Poocoin</a>
                                <a className="landingPage__about__cards__item__button" href="https://exchange.pancakeswap.finance/#/swap?outputCurrency=0xc66cb95e814c10194313096c2dd660e77cf9b2de&inputCurrency=BNB"><img className="landingPage__about__cards__item__button__image" src="https://cryptologos.cc/logos/pancakeswap-cake-logo.png" alt="" /> Pancakeswap</a>
                                <span>Slippage 10%</span>
                                <div className="landingPage__about__cards__item__socails">
                                    <a href=""></a>
                                    <a href=""></a>
                                    <a href=""></a>
                                </div>
                            </div>
                        </div>

                    </div>
                    <img src={roadmap} alt="roadmap" className="landingPage__roadmap" />
                </div>
            </div>
        </>
    )
}

export default LandingPage
