module.exports = userObject => {
    const {city, area, price, password} = userObject;

    if(!city || !area || !price || !password){
        throw new Error('Не коректно введені дані')
    }
};