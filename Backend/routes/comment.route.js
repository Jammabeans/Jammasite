const express = require('express');
const commentController = require('../controller/comment.controller');

const router = express.Router();


router
    .route('/')
    .post(commentController.createComment)
    

router
  .route('/user/:userId')
  .get(commentController.getUserComments)

router
  .route('/coin/:coinId')
  .get(commentController.getCoinComments)

router
  .route('/user/:userId')
  .get(commentController.getUserComments)


module.exports = router;