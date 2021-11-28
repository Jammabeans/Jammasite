export const formateDate = (date) => {

    const newDate = new Date(date)
    console.log(newDate)
    console.log(date)
    console.log(Date.now())
    const nextDiff = Math.floor((date - Date.now()) /1000)
    console.log(nextDiff)

    const hourDiff = Math.floor(nextDiff / 3600)
    //console.log(hours)

    const minDiff = Math.floor((nextDiff % 3600)/60)
    //console.log(min)
   // console.log(nextDiff % 3600)

    // const minDiff = Math.abs(newDate.getMinutes())

    // console.log(minDiff)

    
    // const hourDiff = Math.abs(newDate.getHours())

    // console.log(hourDiff)

    if (minDiff < 0 & hourDiff < 0){
        return 'Airdrop ready'
    }

    if(minDiff === 0){
        if(hourDiff > 1){
            return `${hourDiff} hours left`
        }
        return `${hourDiff} hour left`
    }
    else if(hourDiff === 0){
        if(minDiff > 1){
            return `${minDiff} minutes left`
        }
        return `${minDiff} minute left`
    }
    else{
        if(hourDiff > 1 && minDiff > 1){
            return `${hourDiff} hours and ${minDiff} minutes left`
        }
        else if(hourDiff > 1){
            return `${hourDiff} hours and ${minDiff} minute left`
        }
        else if( minDiff > 1){
            return `${hourDiff} hour and ${minDiff} minutes left`
        }
        else{
            return `${hourDiff} hour and ${minDiff} minute left`
        }
    }


}