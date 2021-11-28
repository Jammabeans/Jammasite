import React, { useEffect, useState } from 'react'
import {useSelector} from 'react-redux'
import Web3 from 'web3'
import { formateAmount } from '../../helpers/amountFormater'
import { formateDate } from '../../helpers/dateFormater';
import { useMoralis, useMoralisWeb3Api } from "react-moralis";


function AirDrop()  {

    const [airDropAmount, updateAmount] = useState(0)
    const [userJammaBalance, updateUserJammaBalance] = useState(0)
    const [claimButton, setClaimButton] = useState()
    const { Moralis } = useMoralis();
    const { account } = useMoralisWeb3Api();
console.log(Moralis)
console.log(account.getTokenBalances)
    const {try2} = account.getTokenBalances()
    console.log(try2)
    const {user} = useSelector(state => state.user)
    console.log(user)
    let er20Contract = null;
    let jammaContract = null;
    const {abijamma} = {
        "abijamma" : [{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"spender","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"minTokensBeforeSwap","type":"uint256"}],"name":"MinTokensBeforeSwapUpdated","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"tokensSwapped","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"ethReceived","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"tokensIntoLiqudity","type":"uint256"}],"name":"SwapAndLiquify","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"bool","name":"enabled","type":"bool"}],"name":"SwapAndLiquifyEnabledUpdated","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Transfer","type":"event"},{"inputs":[],"name":"_airDropAdderss","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"_burnAdderss","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"_devAddress","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"_devFee","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"_isExcludedFromAutoLiquidity","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"_liquidityFee","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"_marketingFee","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"_marketingWallet","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"_maxTxAmount","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"_taxFee","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"spender","type":"address"}],"name":"allowance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"approve","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"decimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"pure","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"subtractedValue","type":"uint256"}],"name":"decreaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"excludeFromReward","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"getUnlockTime","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"includeInReward","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"addedValue","type":"uint256"}],"name":"increaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"isExcludedFromFee","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"isExcludedFromReward","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"time","type":"uint256"}],"name":"lock","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"pure","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tAmount","type":"uint256"},{"internalType":"bool","name":"deductTransferFee","type":"bool"}],"name":"reflectionFromToken","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"devFee","type":"uint256"}],"name":"setDevFeePercent","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"a","type":"address"},{"internalType":"bool","name":"b","type":"bool"}],"name":"setExcludedFromAutoLiquidity","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"},{"internalType":"bool","name":"e","type":"bool"}],"name":"setExcludedFromFee","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"liquidityFee","type":"uint256"}],"name":"setLiquidityFeePercent","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"marketingFee","type":"uint256"}],"name":"setMarketingFeePercent","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"maxTxPercent","type":"uint256"}],"name":"setMaxTxPercent","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bool","name":"_enabled","type":"bool"}],"name":"setSwapAndLiquifyEnabled","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"taxFee","type":"uint256"}],"name":"setTaxFeePercent","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"p","type":"address"}],"name":"setUniswapPair","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"r","type":"address"}],"name":"setUniswapRouter","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"swapAndLiquifyEnabled","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"pure","type":"function"},{"inputs":[{"internalType":"uint256","name":"rAmount","type":"uint256"}],"name":"tokenFromReflection","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalFees","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transfer","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"sender","type":"address"},{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transferFrom","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"uniswapV2Pair","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"uniswapV2Router","outputs":[{"internalType":"contract IUniswapV2Router02","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"unlock","outputs":[],"stateMutability":"nonpayable","type":"function"},{"stateMutability":"payable","type":"receive"}]
    }
    const {abi} =  {
        "abi": [
            {
            "inputs": [],
            "stateMutability": "nonpayable",
            "type": "constructor"
            },
            {
            "anonymous": false,
            "inputs": [
            {
            "indexed": false,
            "internalType": "address",
            "name": "sender",
            "type": "address"
            },
            {
            "indexed": false,
            "internalType": "uint256",
            "name": "amount",
            "type": "uint256"
            }
            ],
            "name": "AirdropSent",
            "type": "event"
            },
            {
            "anonymous": false,
            "inputs": [
            {
            "indexed": true,
            "internalType": "address",
            "name": "previousOwner",
            "type": "address"
            },
            {
            "indexed": true,
            "internalType": "address",
            "name": "newOwner",
            "type": "address"
            }
            ],
            "name": "OwnershipTransferred",
            "type": "event"
            },
            {
            "inputs": [],
            "name": "AirdropAmount",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                }
            ],
            "stateMutability": "view",
            "type": "function"
            },
            {
            "inputs": [],
            "name": "AirdropDelay",
            "outputs": [
            {
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
            }
            ],
            "stateMutability": "view",
            "type": "function"
            },
            {
            "inputs": [],
            "name": "ClaimAirdrop",
            "outputs": [
            {
            "internalType": "bool",
            "name": "",
            "type": "bool"
            }
            ],
            "stateMutability": "nonpayable",
            "type": "function"
            },
            {
            "inputs": [],
            "name": "_JammaAddress",
            "outputs": [
            {
            "internalType": "address",
            "name": "",
            "type": "address"
            }
            ],
            "stateMutability": "view",
            "type": "function"
            },
            {
            "inputs": [
            {
            "internalType": "address",
            "name": "",
            "type": "address"
            }
            ],
            "name": "_TimeTellNextDrop",
            "outputs": [
            {
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
            }
            ],
            "stateMutability": "view",
            "type": "function"
            },
            {
            "inputs": [],
            "name": "owner",
            "outputs": [
            {
            "internalType": "address",
            "name": "",
            "type": "address"
            }
            ],
            "stateMutability": "view",
            "type": "function"
            },
            {
            "inputs": [],
            "name": "renounceOwnership",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
            },
            {
            "inputs": [
            {
            "internalType": "uint256",
            "name": "_amount",
            "type": "uint256"
            }
            ],
            "name": "setAirDropAmount",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
            },
            {
            "inputs": [
            {
            "internalType": "uint256",
            "name": "_delay",
            "type": "uint256"
            }
            ],
            "name": "setAirDropDelay",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
            },
            {
            "inputs": [
            {
            "internalType": "address",
            "name": "_address",
            "type": "address"
            }
            ],
            "name": "setJammaAddress",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
            },
            {
            "inputs": [
            {
            "internalType": "address",
            "name": "newOwner",
            "type": "address"
            }
            ],
            "name": "transferOwnership",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
            }
        ]   
    }

    
    const [time, setTime] = useState(420)

    console.log("point1")

    useEffect(async() => {
        //REVIEW Refactor this code
        if(user){
            const provider = await window.ethereum
             console.log(provider)
            const web3 = await new Web3(provider)

            //NOTE Address Validity Check
            const address = "0xbCE4bfb164CB21AA3C6e8b199872E78fEe03948E"
            let result = await Web3.utils.isAddress(address)
            console.log("Valid: ",result)  // => true
            //NOTE Adress Validit ===>> true
            const jammaAddress = "0xc66cb95e814c10194313096c2dd660e77cf9b2de"



            er20Contract = await new web3.eth.Contract(
                abi,
                address
            )

            jammaContract = await new web3.eth.Contract(
                abijamma,
                jammaAddress
            )
         
        
console.log(jammaContract)
           

        let res = 0

        res = await er20Contract.methods._TimeTellNextDrop(user.publicKey).call()
        .catch((err) => {
            console.log(err);
            return;
        });
        console.log(res)
        console.log(Math.floor(Date.now() / 1000))
      
        setTime(res * 1000)
        //setTime(1635983547452)
        
        if ((res) < Math.floor(Date.now() / 1000)){
            setClaimButton(<button  onClick={claim}>Get Airdrop</button>)
        }
        else {setClaimButton('')}


        let ress = 0
        ress = await er20Contract.methods.AirdropAmount().call()
        .catch((err) => {
            console.log(err);
            return;
        });
         
        updateAmount(ress)

        let bal = 0
        bal = await jammaContract.methods.balanceOf(user.publicKey).call()
        .catch((err) => {
            console.log(err);
            return;
        });
         
        updateUserJammaBalance(bal)

        }

        console.log(userJammaBalance)


    }, [user])

  

    const claim = async() => {


        const res = await er20Contract.methods.ClaimAirdrop().send({
            from: user.publicKey
        })
        console.log(res) 
        alert("claimed")
    }

   

   
   
    const d = new Date().toString()
    return (
        
        <div className="airdop">
            
            <h2>Airdrop Amount</h2>
            <p>{formateAmount(airDropAmount)}</p>
            
            <h2>Time Till Next Drop</h2>
            <p>{formateDate(time)}</p>
            <p>{}</p>
            
            <p>{claimButton}</p>
            <p></p>
            <p>Your current Jamma Balance</p>
            <p>{formateAmount(userJammaBalance)}</p>
        </div>
    )
}

export default AirDrop

