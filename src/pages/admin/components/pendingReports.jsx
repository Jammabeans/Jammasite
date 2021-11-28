import axios from 'axios'
import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import {TiTick} from 'react-icons/ti'
import LoadingIndicator from '../../../components/LoadingIndicator/LoadingIndicator'
function PendingReports() {

    const [reportData, setReportData] = useState([])
    const [isDataLoaded, setIsDataLoaded] = useState(false)
    useEffect(async() => {
        const {data} = await axios.get('http://localhost:4000/v1/reports')
        setReportData(data)
        setIsDataLoaded(true)
    }, [])


    const approveReport = async(id) =>{
        await axios.get(`http://localhost:4000/v1/reports/approve/${id}`)
        setReportData(
            reportData.filter( report => report._id !== id)
        )
    }

    const deleteReport = async(id) =>{
        await axios.delete(`http://localhost:4000/v1/coins/${id}`)
        setReportData(
            reportData.filter( report => report._id !== id)
        )
    }



    return (
        <div className="admin__pendingCoins">
            {
                reportData && reportData.length > 0 ?
                <div className="admin__pendingCoins__table">
                    <thead>
                        <tr>
                            <td></td>
                            <td>From</td>
                            <td></td>
                            <td>To</td>
                            <td>title</td>
                            <td>Message</td>
                        </tr>
                    </thead>
                    <tbody>
                    {
                        reportData.length > 0 &&
                        reportData.map(report =>
                            <tr>
                                <td><img src={report.userId.img && report.userId.img} alt="" /></td>
                                <td><Link className="admin__pendingCoins__table__link" to={`/user/${report.userId._id}`}>{report.userId.name}</Link></td>
                                <td><img src={report.coinId.logo && report.coinId.logo} alt="" /></td>
                                <td><Link className="admin__pendingCoins__table__link" to={`/user/${report.coinId._id}`}>{report.coinId.name}</Link></td>
                                <td>{report.title}</td>
                                <td>{report.message}</td>
                                <td>
                                    <div className="admin__pendingCoins__table__approval">
                                        <button 
                                            className="admin__pendingCoins__table__approval__button admin__pendingCoins__table__approval__button-approve"
                                            >
                                                <span 
                                                    className="admin__pendingCoins__table__approval__button__icon"
                                                    onClick={() => approveReport(report._id)}
                                                >
                                                    &#10003;
                                                </span>
                                        </button>
                                        <button 
                                            className="admin__pendingCoins__table__approval__button admin__pendingCoins__table__approval__button-disapprove"
                                        >
                                            <span 
                                                className="admin__pendingCoins__table__approval__button__icon"
                                                onClick={() => deleteReport(report._id)}
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
                </div>
                :
                    isDataLoaded
                    ?
                        <h1>No Pending Reports</h1>
                    :
                        <LoadingIndicator />
            }
        </div>
    )
}

export default PendingReports
