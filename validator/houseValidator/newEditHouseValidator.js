module.exports = houseObject => {
    const {city,area,price, password} = houseObject;

    if (!city || !area || !price || !password){
        throw new Error('house object is not valid')
    }

};