import React, { useState } from 'react'
import AllCoins from './components/allCoins'
import AllReports from './components/allReports'
import PendingCoins from './components/pendingCoins'
import PendingReports from './components/pendingReports'
import {useSelector} from 'react-redux'
import { reactLocalStorage } from "reactjs-localstorage";

function Admin() {

    const [activeDropdown, setActiveDropdown] = useState(0)
    const [option, setOption] = useState(1)
    const {user} = useSelector(state => state.user)
    console.log(user)
    //console.log(user.publicKey)
    const publicKey = reactLocalStorage.get('publicKey')
    console.log(publicKey)

    if (user.publicKey == 0xa6252CD5baea1FFe71c97328Dc61fEf3A331D13D) {
        console.log("true")
    
   
   
    return (
        <div className="admin">
            <h1 className="admin__header">Admin Panel</h1>
            <div className="admin__body">
                <div className="admin__control">
                    <div className="admin__control__item">
                        <p className="admin__control__item__button" onClick={ () => { activeDropdown === 1 ? setActiveDropdown(0) : setActiveDropdown(1)} } >Coins</p>
                        <div className={`admin__control__item__dropdown ${activeDropdown === 1 ? `admin__control__item__dropdown-active` : ``}`}>
                            <p className="admin__control__item__dropdown__button" onClick={ () => { setActiveDropdown(0); setOption(1) } }>All Coins</p>
                            <p className="admin__control__item__dropdown__button" onClick={ () => { setActiveDropdown(0); setOption(2) } }>pending approval coins</p>
                        </div>
                    </div>
                    <div className="admin__control__item">
                        <p className="admin__control__item__button" onClick={ () => { activeDropdown === 2 ? setActiveDropdown(0) : setActiveDropdown(2)} }>Reports</p>
                        <div className={`admin__control__item__dropdown ${activeDropdown === 2 ? `admin__control__item__dropdown-active` : ``}`}>
                            <p className="admin__control__item__dropdown__button" onClick={ () => { setActiveDropdown(0); setOption(3) } }>reported coins</p>
                            <p className="admin__control__item__dropdown__button" onClick={ () => { setActiveDropdown(0); setOption(4) } }>pending report Coins</p>
                        </div>
                    </div>    
                </div>
                <div className="admin__content">
                        {
                            option === 1    ?
                                <AllCoins />
                            :   option === 2    ?
                                <PendingCoins />
                            :   option === 3    ?
                                <AllReports />
                            :   option === 4    ?
                                <PendingReports />
                            :   null
                        }
                </div>
            </div>
        </div>
    )
}
else{
    console.log("not")
    return (
        <div> error 404 </div>
    )
}
}

export default Admin
