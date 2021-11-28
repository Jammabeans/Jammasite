const express = require('express');
const { route } = require('.');
const coinController = require('../controller/coin.controller');

const router = express.Router();


router
    .route('/')
    .get(coinController.getCoins)
    .post(coinController.createCoin)
    

router
  .route('/:coinId')
  .get(coinController.getCoin)
  .delete(coinController.deleteCoin)
  .patch(coinController.updateCoin)

  

router
  .route('/report/getreports')
  .get(coinController.reportedCoin)

router
    .route('/verify/:coinId')
    .get(coinController.verifyCoin)


router
  .route('/comments/:coinId')
  .get(coinController.getComments)

router
  .route('/normalVotes/:page')
  .get(coinController.getNormalCoins)

router
.route('/silverVotes/:page')
.get(coinController.getSilverCoins)

router
.route('/goldVotes/:page')
.get(coinController.getGoldCoins)

router
.route('/totalVotes')
.get(coinController.getTotalVotes)

router
  .route('/admin/pendingcoins')
  .get(coinController.getPendingCoins)



module.exports = router;