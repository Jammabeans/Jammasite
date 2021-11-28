// import React, { useEffect, useState } from 'react'


// import { calculateAge } from '../../../helper/calculateAge'
// import Vote from '../../Vote/Vote'

// function TableRow({coin, elementKey, setvotedCoin}) {

//     const {isDarkMode} = useSelector(state => state.theme)

//     const {user} = useSelector(state => state.user)
//     const [voted, setVoted] = useState(false)
//     useEffect(() => {
//         // if(user && coin){
//         //     if(user.votedCoinIds.includes(coin._id)){
//         //         setVoted(true)
//         //     }
//         //     else{
//         //         setVoted(false)
//         //     }
//         // }
//     }, [user])

//     return (
//         coin &&
//             <tr key={elementKey}  className={`coinTable__row ${isDarkMode ? `coinTable__row-dark` : `coinTable__row-light`} `}>
//                 <td className="coinTable__row__item">
//                     <Link 
//                         className="coinTable__row__item__link"
//                         to = {{
//                             pathname : `/coin/${coin._id}`,
//                         }}
//                     >
//                         <img className="coinTable__row__item__image" src={coin.logo} alt="coinlogo" />
//                     </Link>
//                 </td>
//                 <td className="coinTable__row__item">
//                     <Link 
//                         className="coinTable__row__item__link"
//                         to = {{
//                             pathname : `/coin/${coin._id}`,
//                         }}
//                     >
//                         <p>{coin.name} (<span>{coin.symbol}</span>)</p>
//                     </Link>
//                 </td>
//                 <td className="coinTable__row__item__flex">
//                 {
//                     !coin.isPresale
//                     ?
//                         <div className="coinTable__row__item__flex__item">
//                             <div className="coinTable__row__item">
//                                 <p>${coin.price}</p>
//                             </div>
//                         </div>
//                         :
//                         <div className="coinTable__row__item__flex__item">
//                             <div className="coinTable__row__item">
//                                 <div className="coinTable__row__item__presale">Presale</div>
//                             </div>
//                         </div>
//                 }
//                 </td>
//                 {/* FIXME not working */}
//                 <td className="coinTable__row__item">
//                     <p>{coin.launchDate ? calculateAge(coin.launchDate) : "-"}</p>
//                 </td>
//                 <td className="coinTable__row__item">
//                     <Vote 
//                         className={`coinTable__row__item__vote ${false ? 'coinTable__row__item__vote-disabled' : '' } ${voted ? 'coinTable__row__item__vote-voted' : '' }`}
//                         coin ={ coin }
//                         user = {user}
//                         setvotedCoin = { setvotedCoin }
//                     />
//                 </td>
//                 <td className="coinTable__row__item">
//                     {coin.voteValue}
//                 </div>
//             </tr>
//     )
// }




// export default TableRow
