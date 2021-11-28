import Web3 from "web3";
export const getBalance = async(publicKey) => {
    try{
        const web3 = new Web3(window.ethereum);
        const balance = parseInt(await web3.eth.getBalance(publicKey))

        //converted wei into ether
        const balanceInEther = balance / 1000000000000000000
        
        return balanceInEther
    }
    catch(err){
        console.log(err)
    }
}