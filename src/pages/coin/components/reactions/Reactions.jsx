import React, { useEffect } from 'react'
import { AiOutlineRocket, AiOutlineHeart } from 'react-icons/ai'
import {AiFillStar} from 'react-icons/ai'
function Reactions({coin}) {
    useEffect(() => {
        
        if(coin){
            console.log(coin)
        }



    }, [])
    return (
        coin &&
        <div className="coin__detail__reactions">
            <div className="coin__detail__reactions__item coin__detail__reactions__item coin__detail__reactions__item coin__detail__reactions__item-normal">
                <p className="coin__detail__reactions__item__value">{coin.voteCount.normaleVoteCount}</p>
                <AiFillStar className="coin__detail__reactions__item__icon" />
            </div>
            
            <div className="coin__detail__reactions__item coin__detail__reactions__item coin__detail__reactions__item coin__detail__reactions__item-silver">
                <p className="coin__detail__reactions__item__value">{coin.voteCount.silverVoteCount}</p>
                <AiFillStar className="coin__detail__reactions__item__icon" />
            </div>
            
            <div className="coin__detail__reactions__item coin__detail__reactions__item coin__detail__reactions__item coin__detail__reactions__item-gold">
                <p className="coin__detail__reactions__item__value">{coin.voteCount.goldVoteCount}</p>
                <AiFillStar className="coin__detail__reactions__item__icon" />
            </div>
        </div>
    )
}

export default Reactions
