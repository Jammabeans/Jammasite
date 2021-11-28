const express = require('express');
const coinController = require('../controller/coin.controller');

const router = express.Router();


router
    .route('/')
    .get(coinController.getCoins)
    .post(coinController.createCoin)
    

router
  .route('/:publickey')
  .get(coinController.getCoin)
  .delete(coinController.deleteCoin)

router
    .route('/verify/:publickey')
    .get(coinController.verifyCoin)

module.exports = router;