import axios from 'axios'
import React, { useState, useRef } from 'react'
import {BsInfoCircleFill} from 'react-icons/bs'
import { useDispatch } from 'react-redux'
import {createNotification, NOTIFICATION_TYPE_SUCCESS, NOTIFICATION_TYPE_ERROR, NOTIFICATION_TYPE_INFO} from 'react-redux-notify'
function Report({coinId, userId}) {

    const [reportOverlay, setReportOverlay] = useState(false)

    const [titleText, setTitleText] = useState('')
    const [messageText, setMessageText] = useState('')


    const title = useRef()
    const message = useRef()

    const dispatch = useDispatch()
    const submitReport = () =>{

        if(titleText.length < 1){
            title.current.setCustomValidity('Enter Title')
            title.current.reportValidity()
            return
        }
        if(messageText.length < 1){
            message.current.setCustomValidity('Enter Message')
            message.current.reportValidity()
            return
        }

        axios.post('http://localhost:4000/v1/reports',{
            title: titleText,
            message: messageText,
            coinId,
            userId
        })
        
        dispatch(createNotification({
            message: 'Report Submitted',
            type: NOTIFICATION_TYPE_SUCCESS,
            duration: 4000,
        }))

        setReportOverlay(false)






    }



    console.log("rerender")

    return (
        <div className="coin__report">
            <BsInfoCircleFill onClick={ () => setReportOverlay(!reportOverlay)} className="coin__report__icon" />
            {
                reportOverlay && 
                <div className="coin__report__overlay">
                    <div onClick={ () => setReportOverlay(!reportOverlay)} className="coin__report__overlay__mask" />
                    <div className="coin__report__overlay__form">
                        <h1 className="coin__report__overlay__form__header">Report</h1>
                        <input onChange={ (e) => setTitleText(e.target.value)} ref={title}  type="text" className="coin__report__overlay__form__input" placeholder="Enter Title" />
                        <textarea onChange={ (e) => setMessageText(e.target.value)} ref={message} rows={7} type="text" placeholder="Enter Message" className="coin__report__overlay__form__input" />
                        <button onClick={submitReport} className="coin__report__overlay__form__button">Submit Report</button>
                    </div>
                </div>
            }
        </div>
    )
}

export default Report
