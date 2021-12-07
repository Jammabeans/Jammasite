import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import { Link } from 'react-router-dom'
import { 
    FaGlobe, 
    FaTwitter, 
    FaTelegramPlane,
    FaCopy,
    FaArrowUp
} from 'react-icons/fa'
import Reactions from './components/reactions/Reactions'
import CommentSection from './components/commentsection/CommentSection'
import { useSelector, useDispatch } from 'react-redux'
import Report from './components/report/Report'
import axios from 'axios'
import LoadingIndicator from '../../components/LoadingIndicator/LoadingIndicator'
import InchDexCustom from "../../components/InchDex/InchDexCustom";
import { userActions } from '../../Redux/userSlice/userSlice'
import {createNotification, NOTIFICATION_TYPE_SUCCESS, NOTIFICATION_TYPE_ERROR, NOTIFICATION_TYPE_INFO} from 'react-redux-notify'   
import TokenPrice from "components/TokenPrice"
import TokenPriceNoLogo from "components/TokenPriceNoLogo"
import { useMoralis, useMoralisWeb3Api } from "react-moralis";
import useTokenPrice from "hooks/useTokenPrice";


function Coin() {

    const { token } = useMoralisWeb3Api();
    console.log(token)
    
    const {coinId} = useParams()
    console.log(coinId)
    
    
    const { user } = useSelector(state => state.user)


    const [coinData, setCoinData] = useState(null)
    const [totalVotes, setTotalVotes] = useState(0)
    const [address , setAddress] = useState('')
    const [chain , setChain] = useState('bsc')
    const [priceInfo, setPriceInfo] = useState(null)
    const [options, setOptions] = useState(null)

    useEffect(() => {



        
        
        const getCoinData = async() =>{
            try{
                const {data} = await axios.get(`http://localhost:4000/v1/coins/${coinId}`)
                setCoinData(data)
                setTotalVotes(data.voteCount.normaleVoteCount + data.voteCount.silverVoteCount + data.voteCount.goldVoteCount)
                setAddress(data.binanceSmartChain)
                setChain(data.chain)
                console.log(data)
                
    
            }
            catch(err){
                console.log(err)
                
            }

           

        }

        getCoinData()
        .then( res => 
            console.log(coinData),
            console.log(priceInfo)
            )
    }, [])

   

   

    const [voteDisabled, setVoteDisabled] = useState(false)
    const [voted, setVoted] = useState(false)
    
    useEffect(() => {


        
    }, [user, coinData])

console.log(coinData)

    return (
        coinData, 
        address
        
        ?
            <div className="coin">
                         




                <div className="coin-container">
                        <div className="coin__left">
                            <div className="coin__left__upper">

                                <div className="coin__detail__header">
                                    <div className="coin__detail__info">
                                    <div className="coin__detail__info__div">
                                            <img className="coin__detail__info__image" src={coinData.logo && coinData.logo} alt="logo" />
                                            <h2 className="coin__detail__info__name">{coinData.name && coinData.name}</h2>
                                            <span className="coin__detail__info__symbol">{coinData.symbol && coinData.symbol}</span>
                                    </div>
                                    <div className="coin__detail__info__vote">
                                        <Vote 
                                            className={`coinTable__row__item__vote ${voteDisabled ? 'coinTable__row__item__vote-disabled' : '' } ${voted ? 'coinTable__row__item__vote-voted' : '' }`}
                                            coin ={ coinData }
                                            user = {user}
                                            setVoteDisabled = {setVoteDisabled}
                                            option = {1}
                                        />
                                    </div>
                                    </div>
                                    <div className="coin__detail__chain">
                                        <p className="coin__detail__chain__title">Binance Smart Chain:</p>
                                        <p className="coin__detail__chain__value">{coinData.binanceSmartChain && coinData.binanceSmartChain}</p>
                                        <FaCopy className="coin__detail__chain__copyIcon"/>
                                    </div>
                                </div>
<div style={{ display:"flex", justifyContent:"center", padding:"5px 10px"}} ><InchDexCustom  chain="bsc" toTokenAddress={address}/></div>
                                <div className="coin__detail__description">
                                    <p className="coin__detail__description__des">
                                        {coinData.description && coinData.description}
                                    </p>
                                    <p className="coin__detail__description__additional">
                                        {coinData.additionalInformation && coinData.additionalInformation}
                                    </p>
                                </div>

                                <Reactions coin={coinData} />
                                {
                                    user && coinData &&
                                    <Report coinId={coinData._id} userId = {user._id} />
                                }

                            </div>
                            {
                                coinData &&
                                <div className="coin__left__lower">
                                    <CommentSection coinId = {coinData._id} userId = {user ? user._id :  null } />
                                </div>
                            }

                        </div>
                        <div className="coin__right">
                            <div className="coin__dataCard">
                                <div className="coin__dataCard__item">
                                    <p className="coin__dataCard__item__title">Price</p>
                                    <p className="coin__dataCard__item__value">
                                    <TokenPriceNoLogo 
                address={address} 
                chain="bsc" 
                image="/logo.png"
                size="70px" 
              />
                                    </p>
                                </div>
                                <div className="coin__dataCard__item">
                                    <p className="coin__dataCard__item__title">Market Cap</p>
                                    <p className="coin__dataCard__item__value">${coinData.marketCap && coinData.marketCap}</p>
                                </div>
                                <div className="coin__dataCard__item">
                                    <p className="coin__dataCard__item__title">Launch date</p>
                                    <p className="coin__dataCard__item__value">{new Date(coinData.launchDate).toLocaleString()}</p>
                                </div>
                                <div className="coin__dataCard__item">
                                    <p className="coin__dataCard__item__title">Vote Value</p>
                                    <p className="coin__dataCard__item__value">{coinData.voteValue}</p>
                                </div>
                            </div>
                            <div className="coin__socialCard">
                                {
                                    coinData.websiteUrl &&
                                    <a href={coinData.websiteUrl} target="_blank" className="coin__socialCard__item">
                                        <FaGlobe className="coin__socialCard__item__icon" />
                                    <p className="coin__socialCard__item__title">Website</p>   
                                </a>
                                }
                                {
                                    coinData.telegramUrl &&
                                    <a href={coinData.telegramUrl} target="_blank" className="coin__socialCard__item">
                                        <FaTelegramPlane className="coin__socialCard__item__icon" />
                                    <p className="coin__socialCard__item__title">Telegram</p>   
                                </a>
                                }
                                {
                                    coinData.twitterUrl &&
                                    <a href={coinData.twitterUrl} target="_blank" className="coin__socialCard__item">
                                        <FaTwitter className="coin__socialCard__item__icon" />
                                    <p className="coin__socialCard__item__title">Twitter</p>   
                                </a>
                                }
                            </div>
                            <div className="coin__discoverCard">
                                <div className="coin__discoverCard__title">
                                    <p>Discover</p>
                                </div>
                                <div className="coin__discoverCard__coinsList">
                                    <Link to="/" className="coin__discoverCard__coinsList__item">
                                        <img src="https://www.gummybear.finance/logonew.png" alt="logo" className="coin__discoverCard__coinsList__item__image" />
                                        <p className="coin__discoverCard__coinsList__item__title">dogara</p>
                                    </Link>
                                    <Link to="/" className="coin__discoverCard__coinsList__item">
                                        <img src="https://www.gummybear.finance/logonew.png" alt="logo" className="coin__discoverCard__coinsList__item__image" />
                                        <p className="coin__discoverCard__coinsList__item__title">dogara</p>
                                    </Link>
                                    <Link to="/" className="coin__discoverCard__coinsList__item">
                                        <img src="https://www.gummybear.finance/logonew.png" alt="logo" className="coin__discoverCard__coinsList__item__image" />
                                        <p className="coin__discoverCard__coinsList__item__title">dogara</p>
                                    </Link>
                                </div>
                            </div>
                        </div>
                </div>
            </div>
        :
            <LoadingIndicator />
    )
}


const Vote = (props) =>{

    const votes = props.coin.voteCount.normaleVoteCount +  props.coin.voteCount.silverVoteCount +  props.coin.voteCount.goldVoteCount

    const dispatch = useDispatch()

    const handleVote = async() => {
        if(!props.user){
            dispatch(createNotification({
                message: 'Please Login to Vote',
                type: NOTIFICATION_TYPE_ERROR,
                duration: 4000,
            }))
            return 0
        }
        props.setVoteDisabled(true)
        console.log(props.user._id, props.coin._id)

        const {data} = await axios.post("http://localhost:4000/v1/users/vote",{userId:props.user._id, coinId: props.coin._id})
        props.setVoteDisabled(false)
        dispatch(userActions.setUser(data))  

    }



    return(
        <div onClick={handleVote} {...props}>
            <svg xmlns="http://www.w3.org/2000/svg" width="44" height="44" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#2c3e50" fill="none" strokeLinecap="round" strokeLinejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                <line x1="12" y1="5" x2="12" y2="19" />
                <line x1="16" y1="9" x2="12" y2="5" />
                <line x1="8" y1="9" x2="12" y2="5" />
            </svg>
            <p>{votes}</p>
        </div>
    )

}

export default Coin
