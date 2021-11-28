const  Comment  = require('../Models/comment.model');
const User = require('../Models/user.model')
const Coin = require('../Models/coin.model')

const createComment = async (commentBody) => {

  const comment = await Comment.create(commentBody)
  await Coin.findByIdAndUpdate(commentBody.coinId,{$push:{commentIds:comment._id}})
  return await User.findByIdAndUpdate(commentBody.userId,{$push:{commentIds:comment._id}, $inc:{votingScore: 5}})
};



const getCommentsByCoin = async (coinId) => {
    return await Comment.find({coinId:coinId}).populate({
      path:'userId',
      model:'User'
  })
};


const getCommentsByUser = async (userId) => {
  return await Comment.find({userId:userId}).populate({
    path:'userId',
    model:'User'
})
};



module.exports = {
  createComment,
  getCommentsByUser,
  getCommentsByCoin,

};