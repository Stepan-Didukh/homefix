const { provider } = require('../../dataBase');

module.exports  = async (req, res, next) => {
    try{
        const { user_id }  = req.params;
        const query = `SELECT * FROM user WHERE id = ${user_id}`;
        const [isUserPresent] = await provider.promise().query(query)

        if(!isUserPresent.length){
            throw new Error(`user with ${user_id} is not present`);
        }

        req.user= isUserPresent;
        next();
    }catch (e) {
       res.json('error')
    }

}