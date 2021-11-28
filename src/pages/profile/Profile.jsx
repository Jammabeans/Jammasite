import React, { useState, useEffect } from 'react'
import { GiCircleClaws } from 'react-icons/gi'
//import CoinTable from '../../components/coinTable/CoinTable'
import Comments from '../../components/comments/Comments'
import { useSelector } from 'react-redux'
import axios from 'axios'
import TableRow from '../../components/coinTable/components/TableRow'
function Profile() {
    
    const {isDarkMode} = useSelector(state=>state.theme)
    const { user } = useSelector(state => state.user)
    const [current, setCurrent] = useState(0)
    const [coins, setCoins] = useState(null)
    const [myCoins, setMyCoins] = useState(null)
    // const [userComments, setUserComments] = useState(null)
    useEffect(async() => {
        console.log(user)
        if(user){
            console.log("hello")
            const {data: upvotes} = await axios.get(`http://localhost:4000/v1/users/getvote/${user._id}`)
            await upvotes
            console.log(upvotes)
            //setCoins(upvotes.votedCoinIds)
            
            const {data: addedCoins} = await axios.get(`http://localhost:4000/v1/users/mycoins/${user._id}`)
           // setMyCoins(addedCoins.coinIds)
        }
    }, [user,coins])

console.log(current)
console.log(coins)
console.log(myCoins)
    return (
        <div className="profile-container" >
            <div className="profile" >
                <div className="profile__header" style={{backgroundColor: isDarkMode ? `#272727` : `white`, color: isDarkMode ? 'white' : `black`}}>
                    <div className="profile__header__top">
                        <div className="profile__header__info">
                            {/* <img src={user && user.img} alt="" /> */}
                            <h2>{user && user.name}</h2>
                        </div>
                        <div className="profile__header__rank">
                        <span>Diamond</span><GiCircleClaws className="profile__header__rank__icon" />
                        </div>
                    </div>
                    <div className="profile__header__controls">
                        <div onClick={() => setCurrent(0)} className="profile__header__controls__item profile__header__controls__item-active">
                            Upvotes
                        </div>
                        <div onClick={() => setCurrent(1)} className="profile__header__controls__item">
                            Comments
                        </div>
                        <div onClick={() => setCurrent(2)} className="profile__header__controls__item">
                            Coins
                        </div>
                        <div style={{marginLeft:`${current * 13}rem`}} className="profile__header__controls__selector" />
                    </div>
                </div>

                <div className="profile__body">
                    {
                        current === 0 ?

                            coins &&
                            coins.map(item => <TableRow elementKey={item._id} coin={item} />  )
                        
                            : current === 1 ?

                            <>
                                <Comments userId={user._id} />

                            </>

                            : current === 2 ?

                                myCoins &&
                                myCoins.map( item => <TableRow elementKey={item._id} coin = {item} />)

                            : null
                    }
                </div>


            </div>
        </div>
    )
}

export default Profile
