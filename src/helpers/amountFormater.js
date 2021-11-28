import { c2, n4, n6, n12, tokenValueTxt } from "../helpers/formatters";

export const formateAmount = (amount) =>{
    const Amount = Math.abs(amount / 1000000000);
    if(Amount > 1000000000){
        const newAmount = Math.abs(Amount / 1000000000);
        const finalAmount = newAmount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
        const formatAmount = n4.format(newAmount);
        return `${formatAmount} Billion`
    }
    else if(Amount > 1000000){
        const newAmount = Math.abs(Amount / 1000000);
        const finalAmount = newAmount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
        const formatAmount = n4.format(newAmount);
        return `${formatAmount} Million`
    }
    else if(Amount > 1000){
        const newAmount = Math.abs(Amount / 1000);
        const finalAmount = newAmount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
        const formatAmount = n4.format(newAmount);
        return `${formatAmount} Thousand`
    }
    else{
        return amount
    }
}