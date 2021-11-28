import React, { useEffect, useState } from 'react'
import { IoMdThumbsUp } from 'react-icons/io'
import TableRow from '../coinTable/components/TableRow'
import { useSelector } from 'react-redux'
import axios from 'axios'
import { Link } from 'react-router-dom'

function Comments({coinId, userId}) {

    const {isDarkMode} = useSelector(state => state.theme)

    const [commentData, setCommentData] = useState([])

    useEffect(() =>{

        const getComments = async() =>{
            try{
                if(coinId){
                    setCommentData(
                        (await axios.get(`http://localhost:4000/v1/comments/coin/${coinId}`)).data
                    )
                }
                else if(userId){
                    setCommentData(
                        (await axios.get(`http://localhost:4000/v1/comments/user/${userId}`)).data
                    )
                }
            }
            catch(err){
                console.log(err)
            }
        }

        getComments()

        
    },[])

    console.log(commentData)

    return (
        commentData ?
        commentData.map( comment =>
            <div className="comments-container" style={{backgroundColor: isDarkMode ? `#272727`: `white`, color: isDarkMode ? `white`: `#575757`}}>
                <div className="comments">
                    <div className="comments__header">
                        <div className="comments__header__info">
                            <Link to={`/user/${comment.userId._id}`}><img className="comments__header__info__image" src={comment.userId.img} alt="" /></Link>
                            <p>{comment.userId.name}</p>
                        </div>
                        {
                            comment.coinPrediction &&
                                <div className="comments__header__type">
                                    <IoMdThumbsUp  className={`comments__header__type__icon ${comment.coinPrediction === 'upvote' ? 'comments__header__type__icon__upvote' : 'comments__header__type__icon__downvote'  }`}/>
                                </div>
                        }
                    </div>
                    <div className="comments__content">
                        {comment.message}
                    </div>
                    {/* <TableRow /> */}
                </div>
            </div>
            
        )
        :null
    )
}

export default Comments
