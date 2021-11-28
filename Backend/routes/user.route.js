const express = require('express');
const userController = require('../controller/user.controller');

const router = express.Router();


router
    .route('/')
    .get(userController.getUsers)
    .post(userController.createUser)
    

router
  .route('/:publickey')
  .get(userController.getUser)
  .delete(userController.deleteUser)
  .patch(userController.updateUser)

router
  .route('/vote/')
  .post(userController.castVote)

router
  .route('/getvote/:userId')
  .get(userController.getVotedCoins)

router
  .route('/mycoins/:userId')
  .get(userController.getMyCoins)

module.exports = router;