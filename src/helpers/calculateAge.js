export const calculateAge = (age) => {

    const newAge = new Date(age)
    //console.log(newAge)
    
    const yearDiff = Math.abs(new Date().getFullYear() - newAge.getFullYear())
    //console.log(yearDiff)

    const monthDiff = Math.abs(new Date().getMonth() - newAge.getMonth())
    //console.log(monthDiff)

    const dayDiff = Math.abs(new Date().getDay() - newAge.getDay())
    //console.log(dayDiff)




    if(newAge < new Date()){
        if(yearDiff === 0 && monthDiff === 0){
            if(dayDiff === 0){
                return "Launched Today" 
            }
            else if(dayDiff > 1){
                return `Launched ${dayDiff} Days ago`
            }
            else{
                return `Launched ${dayDiff} Day age`
            }
        }
        else if(yearDiff === 0){
            if(monthDiff > 1){
                return `Launched ${monthDiff} months ago`
            }
            else{
                return `Launched ${monthDiff} month ago`
            }
        }
        else{
            if(yearDiff > 1){
                return `Launched ${yearDiff} years ago`
            }
            else{
                return `Launched ${yearDiff} year ago`
            }
        }
    }
    else if( newAge > new Date()){
        if(yearDiff === 0 && monthDiff === 0){
            if(dayDiff === 0){
                return "Launched Today" 
            }
            else if(dayDiff > 1){
                return `Launch in ${dayDiff} Days`
            }
            else{
                return `Launch in ${dayDiff} Day`
            }
        }
        else if(yearDiff === 0){
            if(monthDiff > 1){
                return `Launch in ${monthDiff} months`
            }
            else{
                return `Launch in ${monthDiff} month`
            }
        }
        else{
            if(yearDiff > 1){
                return `Launch in ${yearDiff} years`
            }
            else{
                return `Launch in ${yearDiff} year`
            }
        }
    }
}