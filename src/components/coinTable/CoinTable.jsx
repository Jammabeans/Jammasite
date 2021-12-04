import React, { useEffect, useState } from 'react'
import {Background} from '../../Theme/Background'
import LoadingIndicator from '../LoadingIndicator/LoadingIndicator'
import { Link } from 'react-router-dom'
import { calculateAge } from '../../helpers/calculateAge'
import Vote from '../Vote/Vote'
import { useSelector } from 'react-redux'
import TokenPrice from "components/TokenPrice";
import useTokenPrice from "hooks/useTokenPrice";
import TokenPriceNoLogo from "components/TokenPriceNoLogo"
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>;
<script src='tablesort.min.js'></script>;

//<!-- Include sort types you need -->
<script src='tablesort.number.js'></script>;
<script src='tablesort.date.js'></script>;

<script>
  // new Tablesort(document.getElementById('table-id'));
</script>

function CoinTable({coinData, setCoinData, slectedOption}) {

console.log(slectedOption)
    const [votedCoin, setvotedCoin] = useState(null)
    const {isDarkMode} = useSelector(state => state.theme)
    const {user} = useSelector(state => state.user)
    const [sortBy, setSortBy] = useState(null)
    let myArray = coinData


    useEffect(() => {

        if(votedCoin && coinData){
            
            setCoinData([
               [...coinData.map(el =>{
                    if( el._id === votedCoin._id){
                        return Object.assign({}, el, votedCoin)
                    }
                    return el
                })]
            ])

           
        }

        console.log('effect triggered')
        
        


    }, [votedCoin, sortBy])

   

    const isVoted = (coinId) => {
        let found;
        if(!!user.votedCoins.find(item => item._id === coinId)){
            return true
        }
        else{
            return false
        }
    }

    async function  sortNormalVotes ()  {

        console.log('age clicked')
        myArray.sort((a,b) => b.voteCount.normaleVoteCount - a.voteCount.normaleVoteCount)
        setCoinData(myArray)
        setSortBy('normalVotes')       
        
    }

    const sortByPrice = async() => {

        console.log('age clicked')
        myArray.sort((a,b) => b.price - a.price)
        console.log(myArray)
        setCoinData(myArray)
        setSortBy('byPrice')       
        
    }

    const sortByVoteValue = async() => {

        console.log('age clicked')
        myArray.sort((a,b) => b.voteValue - a.voteValue)
        console.log(myArray)
        setCoinData(myArray)
        setSortBy('byVoteValue')       
        
    }

    return (
        <Background className="coinTable-container">
            <div className="coinTable" >
                {
                    coinData && user
                    ?
                        coinData.length > 0 ?
                        <table className="coinTable__table">
                            <thead>
                                <tr className={`coinTable__table__head ${isDarkMode ? `coinTable__table__head-dark` : `coinTable__table__head-light`} `}>
                                    <td></td>
                                    <th>Name</th>
                                    <th onClick={sortByPrice}>Price</th>
                                    <th>Age</th>
                                    <th onClick={sortNormalVotes}>Votes</th>
                                    <th onClick={sortByVoteValue}>Vote value</th>
                                </tr>
                            </thead>
                            <tbody>
                            {
                                coinData.filter(x => x.isApproved ==true).map( (coin, index) =>
                                    <tr key={index}  className={`coinTable__row ${isDarkMode ? `coinTable__row-dark` : `coinTable__row-light`} `}>
                                        <td className="coinTable__row__item coinTable__row__item__cont">
                                            <Link 
                                                className="coinTable__row__item__link"
                                                to = {{
                                                    pathname : `/coin/${coin._id}`,
                                                }}
                                            >
                                                <img className="coinTable__row__item__image" src={coin.logo} alt="coinlogo" />
                                            </Link>
                                        </td>
                                        <td className="coinTable__row__item">
                                            <Link 
                                                className="coinTable__row__item__link"
                                                to = {{
                                                    pathname : `/coin/${coin._id}`,
                                                }}
                                            >
                                                <p>{coin.name} (<span>{coin.symbol}</span>)</p>
                                            </Link>
                                        </td>
                                        <td className="coinTable__row__item__flex">
                                        {
                                            
                                                <div className="coinTable__row__item__flex__item">
                                                    <div className="coinTable__row__item">
                                                        <p>
                                                        <TokenPriceNoLogo 
                address={coin.binanceSmartChain} 
                chain="bsc" 
                image="/logo.png"
                size="70px" 
              />
                                                         </p>
                                                    </div>
                                                </div>
                                                
                                                
                                        }
                                        </td>
                                        {/* FIXME not working */}
                                        <td className="coinTable__row__item">
                                            <p>{coin.launchDate ? calculateAge(coin.launchDate) : "-"}</p>
                                        </td>
                                        <td className="coinTable__row__item">
                                            <Vote 
                                                className={`coinTable__row__item__vote ${isVoted(coin._id) ? 'coinTable__row__item__vote-voted' : '' }`}
                                                coin ={ coin }
                                                user = {user}
                                                setvotedCoin = { setvotedCoin }
                                                option = {slectedOption}
                                            />
                                        </td>
                                        <td className="coinTable__row__item">
                                            {coin.voteValue}
                                        </td>
                                    </tr>
                                )   
                            }
                            </tbody>
                        </table>
                            :
                                null
                    :
                        <LoadingIndicator />
                }
            </div>
        </Background>
    )
}






export default CoinTable
