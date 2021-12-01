//import React from 'react'
import axios from 'axios'
import { userActions } from '../../Redux/userSlice/userSlice'
import Web3 from 'web3'
import {createNotification, NOTIFICATION_TYPE_ERROR, NOTIFICATION_TYPE_INFO} from 'react-redux-notify'
import {getBalance} from '../../helpers/get-balance'
import { useDispatch } from 'react-redux'
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'

const Vote = (props) =>{

    //const {selectedOption} = useSelector(state => state.selectedOption)


    

    let votes = props.coin.voteCount.normaleVoteCount +  props.coin.voteCount.silverVoteCount +  props.coin.voteCount.goldVoteCount

    const dispatch = useDispatch()

    if (props.option == 1){
        votes = props.coin.voteCount.normaleVoteCount
    }
    else if (props.option == 2){
        votes = props.coin.voteCount.silverVoteCount
    }
    else if (props.option == 3){
        votes = props.coin.voteCount.goldVoteCount
    }

    console.log(props.option)

    

    const handleVote = async() => {
        
        if(!props.user){
            dispatch(createNotification({
                message: 'Please Login to Vote',
                type: NOTIFICATION_TYPE_ERROR,
                duration: 4000,
            }))
            return 0
        }
        const isFound = props.user.votedCoins.find( item => item.id === props.coin._id )

        if(!!isFound){
            console.log("Found")

            const timeDiff = (new Date() - new Date(isFound.votingTime)) / (1000 * 60 * 60 * 24)
            
            console.log(timeDiff)
            if(timeDiff < 1){
                alert("You can't more than once per day")
                return 
            }

            const n = {
                id: props.coin._id,
                votingTime: new Date()
            }
            dispatch(userActions.setUser({
                ...props.user,
                votedCoins: [props.user.votedCoins.map(item =>{
                    if(item.id === props.coin._id){
                        return Object.assign({}, n)
                    }
                    return item
                })]
            }))
        }
        else{
            const n = {
                id: props.coin._id,
                votingTime: new Date()
            }
            dispatch(userActions.setUser({
                ...props.user,
                votedCoins: [...props.user.votedCoins, n]
            }))
            console.log("Notdond")
        }
        let balance = 0
        balance = await getBalance(props.user.publicKey)

        if(props.user.voteType === "normal"){
            props.setvotedCoin({
                ...props.coin,
                voteCount : {...props.coin.voteCount, normaleVoteCount: props.coin.voteCount.normaleVoteCount + 1},
                voteValue : props.coin.voteValue + balance
            })
        }
        else if(props.user.voteType === "silver"){
            props.setvotedCoin({
                ...props.coin,
                voteCount : {...props.coin.voteCount, silverVoteCount: props.coin.voteCount.silverVoteCount + 1},
                voteValue : props.coin.voteValue + balance
            })
        }
        else if(props.user.voteType === "gold"){
            props.setvotedCoin({
                ...props.coin,
                voteCount : {...props.coin.voteCount, goldVoteCount: props.coin.voteCount.goldVoteCount + 1},
                voteValue : props.coin.voteValue + balance
            })
        }
        

        
        const newData = await axios.post("http://localhost:4000/v1/users/vote",{userId:props.user._id, coinId: props.coin._id, voteValue: balance})
        console.log(newData)

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

export default Vote
