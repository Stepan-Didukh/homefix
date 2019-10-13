const checkHouseIdMiddleware = require('./checkHouseIdMiddleware');
const CheckHouseValidityMiddleware  = require('./checkHouseValidityMiddleware');
const checkHouseLoginMiddleware = require('./checkHouseLoginMiddleware');
const checkEditHouseMiddleware = require('./checkEditHouseMiddleware');

module.exports = {
    checkHouseIdMiddleware,
    CheckHouseValidityMiddleware,
    checkHouseLoginMiddleware,
    checkEditHouseMiddleware
}