const {provider} = require('../../dataBase');

module.exports = async ( req, res, next) => {
    try {
        const { city, password } = req.body;
        const query = `SELECT * FROM house WHERE city = '${city}' AND password = '${password}'`;
        const [checkLoginHouse] = await provider.promise().query(query);

        if (!checkLoginHouse.length){
            throw new Error(`Incorrect values`);
        }

        req.user = checkLoginHouse;
        next();

    } catch (e) {

        res.status(400).json(e.message);

    }
};