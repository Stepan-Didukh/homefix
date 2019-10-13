const {provider} = require('../../database');

module.exports = async (req, res) => {
    try {

        const {house_id ,city ,price,area ,password} = req.body;
        const query = `UPDATE house SET city = ?, price = ?, area = ?, password = ? WHERE id = ? `;

        await provider.promise().query(query,[city,price,area,password,house_id]);
        res.redirect(`house/${house_id}`);

    } catch (e) {
        res.json('error')
    }
};