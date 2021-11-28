const httpStatus = require('http-status');
const ApiError = require('../utils/ApiError');
const catchAsync = require('../utils/catchAsync');
const  commentService  = require('../service/comment.service');




const createComment = catchAsync(async (req, res) => {
    const comment = await commentService.createComment(req.body);
    res.status(httpStatus.CREATED).send(comment);
});




const getUserComments = catchAsync(async (req, res) => {
  const result = await commentService.getCommentsByUser(req.params.userId);
  res.send(result);
});

const getCoinComments = catchAsync(async (req, res) => {
    const result = await commentService.getCommentsByCoin(req.params.coinId);
    res.send(result);
});


module.exports = {
  createComment,
  getUserComments,
  getCoinComments
};