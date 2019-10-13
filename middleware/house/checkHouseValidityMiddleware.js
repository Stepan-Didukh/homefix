const { houseValidator } =  require('../../validator');

module.exports = (req, res, next)=>{
    try{
        const house = req.body;

        houseValidator.newHouseValidator(house);

        next()
    }catch (e) {
        res.json('error1')
    }

}