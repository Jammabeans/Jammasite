const httpStatus = require('http-status');
const pick = require('../utils/pick');
const ApiError = require('../utils/ApiError');
const catchAsync = require('../utils/catchAsync');
const  userService  = require('../service/user.service');




const createUser = catchAsync(async (req, res) => {
    const user = await userService.createUser(req.body);
    res.status(httpStatus.CREATED).send(user);
});



const getUser = catchAsync(async (req, res) => {
  const user = await userService.getUserById(req.params.publickey);
  if (!user) {
    throw new ApiError(httpStatus.NOT_FOUND, 'User not found');
  }
  res.send(user);
});

const deleteUser = catchAsync(async (req, res) => {
  await userService.deleteUserById(req.params.publickey);
  res.status(httpStatus.NO_CONTENT).send();
});


const updateUser = catchAsync(async (req, res) => {
  await userService.updateUserById(req.params.publickey);
  res.status(httpStatus.NO_CONTENT).send();
});


const getUsers = catchAsync(async (req, res) => {
  const result = await userService.getAllUsers();
  res.send(result);
});


const castVote = catchAsync(async (req, res) => {
  const result = await userService.voteCast(req.body);
  res.send(result);
});

const getVotedCoins = catchAsync(async (req, res) => {
  const result = await userService.getUpvotes(req.params.userId);
  res.send(result);
});


const getMyCoins = catchAsync(async (req, res) => {
  const result = await userService.geyAddedCoins(req.params.userId);
  res.send(result);
});


module.exports = {
  getUser,
  createUser,
  deleteUser,
  updateUser,
  getUsers,
  castVote,
  getVotedCoins,
  getMyCoins
};