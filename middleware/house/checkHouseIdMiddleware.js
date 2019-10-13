const {provider} =require('../../dataBase');

module.exports  = async (req, res, next) => {
    try{
        const { house_id }  = req.params;
        const query = `SELECT * FROM house WHERE id = ${house_id}`;
        const [isHousePresent] = await provider.promise().query(query);

        if(!isHousePresent.length){
            throw new Error(`user with ${house_id} is not present`);
        }

        req.user= isHousePresent;
        next();
    }catch (e) {
        res.json('Not found this house')
    }

};