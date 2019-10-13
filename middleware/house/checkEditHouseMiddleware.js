const { houseValidator } = require('../../validator');

module.exports = (req, res, next) => {
    try {
        const house = req.body;

        houseValidator.newEditHouseValidator(house);

        next()

    } catch (e) {
        res.status(400).json(e.message)
    }
};