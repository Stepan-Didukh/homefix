const { provider }  =  require('../../dataBase');

module.exports = async (req,res)=>{
    let {city, area, price, password} = req.body;

    const query  = `INSERT INTO house(city, price, area, password) VALUES(?,?,?,?)`;
    await provider.promise().query(query,[city, area, price, password]);
    res.render('loginHouse')
};