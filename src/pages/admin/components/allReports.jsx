import axios from 'axios'
import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import {TiTick} from 'react-icons/ti'
import LoadingIndicator from '../../../components/LoadingIndicator/LoadingIndicator'
function AllReports() {

    const [coinData, setCoinData] = useState([])
    const [isDataLoaded, setIsDataLoaded] = useState(false)

    useEffect(async() => {
        const {data} = await axios.get('http://localhost:4000/v1/coins/report/getreports')
        setCoinData(data)
        setIsDataLoaded(true)
    }, [])

    const deleteCoin = async(id) =>{
        console.log(id)
        await axios.delete(`http://localhost:4000/v1/coins/${id}`)
        setCoinData(
            coinData.filter( coin => coin._id !== id)
        )
    }



    return (
        <div className="admin__pendingCoins">
            {
                coinData && coinData.length > 0 ?
                <table className="admin__pendingCoins__table">
                    <thead>
                        <tr>
                            <td></td>
                            <td>Name</td>
                            <td>Symbol</td>
                            <td>Total Reports</td>
                            <td>Delete</td>
                        </tr>
                    </thead>
                    <tbody>
                    {
                        coinData.length > 0 &&
                        coinData.map(coin =>
                            <tr>
                                <td><img src={coin.logo && coin.logo} alt="" /></td>
                                <td><Link className="admin__pendingCoins__table__link" to={`/coin/${coin._id}`}>{coin.name}</Link></td>
                                <td>{coin.symbol}</td>
                                <td>{coin.totalApprovedReports}</td>
                                <td>
                                    <div className="admin__pendingCoins__table__approval">
                                        <button 
                                            className="admin__pendingCoins__table__approval__button admin__pendingCoins__table__approval__button-disapprove"
                                        >
                                            <span 
                                                className="admin__pendingCoins__table__approval__button__icon"
                                                onClick={() => deleteCoin(coin._id)}
                                            >
                                                &#10007;
                                            </span>
                                        </button>
                                    </div>
                                </td>
                            </tr>        
                        )
                    }
                    </tbody>
                </table>
                :
                    isDataLoaded 
                    ?
                        <h1>No Coin</h1>
                    :
                        <LoadingIndicator />   
            }
        </div>
    )
}

export default AllReports
