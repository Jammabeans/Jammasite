const  User  = require('../Models/user.model');
const ApiError = require('../utils/ApiError');
const httpStatus = require('http-status');
const Coin = require('../Models/coin.model');

const createUser = async (userBody) => {
  const user = await User.find({publicKey: userBody.publicKey})
  if(user.length > 0 ){
    throw new ApiError(httpStatus.BAD_REQUEST, 'Account already created');
  }
  console.log(userBody)
  return User.create(userBody);
};

const deleteUserById = async (id) =>{
  console.log(userBody)
  return User.deleteOne({publicKey: id})
}



const getUserById = async (id) => {
  return await User.findOne({publicKey:id});
};

const getUpvotes = async(id) =>{
  return await User.findById(id).populate({
    path:'votedCoinIds',
    model:'Coin'
  });
}


const updateUserById = async (userId, updateBody) => {
  const user = await getUserById(userId);
  if (!user) {
    throw new ApiError(httpStatus.NOT_FOUND, 'User not found');
  }
  if (updateBody.email && (await User.isEmailTaken(updateBody.email, userId))) {
    throw new ApiError(httpStatus.BAD_REQUEST, 'Email already taken');
  }
  Object.assign(user, updateBody);
  await user.save();
  return user;
};

const getAllUsers = async ( ) => {

  const user = await User.find()
  return user

}

const voteCast = async (voteBody) =>{

  let user = await User.findById(voteBody.userId)
  console.log("Votecast")
  let coin;
  
  const g = user.votedCoins.find( item => item.id === voteBody.coinId)
  console.log(g)
  if(g){
    console.log("found")
    const timeDiff = (new Date() - g.votingTime) / (1000 * 60 * 60 * 24)
    if(timeDiff < 1){
      throw new ApiError(httpStatus.FORBIDDEN, 'Cannot Vote more than once a day');
    }
  }

  const n = {
    id: voteBody.coinId,
    votingTime: new Date()
  }

  user =  await User.findByIdAndUpdate( voteBody.userId, { $inc: { votingScore: 10 }, $push: { votedCoins: n } },{ new: true } )
    
  if(user.voteType === 'normal'){
    coin = await Coin.findByIdAndUpdate(voteBody.coinId,{$inc:{ "voteCount.normaleVoteCount": 1, voteValue: voteBody.voteValue}})
  }
  else if(user.voteType === 'silver'){
    coin = await Coin.findByIdAndUpdate(voteBody.coinId,{$inc:{"voteCount.silverVoteCount": 1,  voteValue: voteBody.voteValue }})
  }
  else if(user.voteType === 'gold'){
    coin =  await Coin.findByIdAndUpdate(voteBody.coinId,{$inc:{"voteCount.goldVoteCount": 1,  voteValue: voteBody.voteValue }})
  }

  if(user.votingScore >= 250 && user.votingScore - 10 < 250){
    user = await User.findByIdAndUpdate(voteBody.userId,{voteType:"silver"}, {new: true})
  }
  else if(user.votingScore >= 1000 && user.votingScore - 10 < 1000){
    user = await User.findByIdAndUpdate(voteBody.userId,{voteType:"gold"}, {new: true})
  }

  return {
    user,
    coin
  }

}


const geyAddedCoins = async(userId) => {
  return await User.findById(userId).populate({
    path:'coinIds',
    model:'Coin'
  });
};


module.exports = {
  getUserById,
  createUser,
  deleteUserById,
  updateUserById,
  getAllUsers,
  voteCast,
  getUpvotes,
  geyAddedCoins
};