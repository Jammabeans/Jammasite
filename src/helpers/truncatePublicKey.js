export const truncateKey = (key) => {

    const newkey = key.slice(0,6) + "..." + key.slice(key.length - 4, key.length) 
    
    return newkey
    
}