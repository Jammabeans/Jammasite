import React, { useState } from 'react'
import Comments from '../../../../components/comments/Comments'
import { IoMdThumbsUp } from 'react-icons/io'
import { useSelector, useDispatch } from 'react-redux'
import { FiSend } from 'react-icons/fi'
import axios from 'axios'
import {createNotification, NOTIFICATION_TYPE_SUCCESS, NOTIFICATION_TYPE_ERROR, NOTIFICATION_TYPE_INFO} from 'react-redux-notify'
function CommentSection({userId, coinId}) {

    const {isDarkMode} = useSelector(state => state.theme)

    const [commentText, setCommentText] = useState('')
    const [coinPrediction, setCoinPrediction] = useState(null)
    const dispatch = useDispatch()
    const sendComment = async () =>{

        if(commentText){

            try{
                await axios.post("http://localhost:4000/v1/comments",{
                message:commentText,
                coinPrediction,
                userId,
                coinId
                })
                dispatch(createNotification({
                    message: 'Comment Posted',
                    type: NOTIFICATION_TYPE_SUCCESS,
                    duration: 4000,
                }))
            }
            catch(err){
                dispatch(createNotification({
                    message: err.message,
                    type: NOTIFICATION_TYPE_ERROR,
                    duration: 4000,
                }))
            }

        }
        else{
            alert("Enter Comment")
        }

    }



    return (
        <div className="coin__comments">
           
            {
                userId ?
                <div className="coin__comments__form" style={{backgroundColor: isDarkMode ? `#272727` : `white`, color: isDarkMode ? `white` : `black`}}>
                    <div className="coin__comments__form__input">
                        <div className="coin__comments__form__left">
                            <img className="coin__comments__form__image" src="https://coinhunt.cc/_next/image?url=https%3A%2F%2Flh3.googleusercontent.com%2Fa-%2FAOh14GjKmPqHEPY7eoIIWkL8QtimGtPrJvVPs3S31Pqa1Q%3Ds96-c&w=1920&q=100" alt="" />
                            <IoMdThumbsUp
                                onClick={ () => {coinPrediction === 'upvote' ? setCoinPrediction(null) : setCoinPrediction('upvote')}} 
                                className={`coin__comments__form__icon coin__comments__form__icon-support ${coinPrediction === 'upvote' ? `coin__comments__form__icon-support-active` : `` }`} 
                            />
                            <IoMdThumbsUp 
                                onClick={ () => {coinPrediction === 'downvote' ? setCoinPrediction(null) : setCoinPrediction('downvote')}}
                                className={`coin__comments__form__icon coin__comments__form__icon-scam ${coinPrediction === 'downvote' ? `coin__comments__form__icon-scam-active` : `` }`}
                            />
                        </div>
                        <div className="coin__comments__form__right">
                            <textarea onChange={(e) => setCommentText(e.target.value)} type="text" className="coin__comments__form__input__field" placeholder="Enter your comment here" />
                            <FiSend onClick={sendComment} className={`coin__comments__form__input__icon ${commentText ? `coin__comments__form__input__icon__show` : ``}`}/>
                        </div>
                    </div>
                </div>
                :
                <div>
                    Login to Enter a Comment
                </div>
            }
            <Comments coinId={coinId} />
        </div>
    )
}

export default CommentSection
