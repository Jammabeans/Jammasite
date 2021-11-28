const Coin  = require('../Models/coin.model');
const { findByIdAndUpdate } = require('../Models/user.model');
const User = require('../Models/user.model');

const createCoin = async (coinBody) => {
  
  const userId = coinBody.userId
  delete coinBody.userId

  const coin =  await Coin.create(coinBody);
  console.log(coin._id)
  return await User.findByIdAndUpdate(userId,{$push:{coinIds:coin._id}})
};

const updateVoteValue = async(coinId, userBalance) =>{

  return await findByIdAndUpdate(coinId, {$inc: { voteValue: userBalance }})

}

const updateCoinById = async (coinId, coinBody) => {
  const coin = Coin.findById(coinId)
  if(!coin){
    throw new ApiError(httpStatus.NOT_FOUND, 'Coin not found');
  }
  Object.assign(coin, coinBody);
  await coin.save();
  return coin
}

const deleteCoinById = async (id) =>{
  return Coin.findByIdAndDelete(id)
}


const getCoinById = async (id) => {
  console.log(id)
  return Coin.findById(id);
};

const getAllCoins = async ( ) => {
  const coin = await Coin.find()
  return coin
}

const coinVerification = async (coinId) => {
  
  return await Coin.findByIdAndUpdate(coinId,{isApproved: true});
};


const getComments = async (coinId) => {
  
  console.log(coinId)

  const comments = await Coin.findById(coinId).populate({
    path:'commentIds',
    model:'Comment'
  });
  return comments.commentIds

};

const getCoinsNormal = async (page) => {
  console.log(page)
  return await Coin.find().skip(page * 10).limit(10);
};

const getCoinsSilver = async (page) => {
  return await Coin.find( { "voteCount.silverVoteCount": {$gt : 0} } ).skip(page * 10).limit(10);
};

const getCoinsGold = async (page) => {
  return await Coin.find( { "voteCount.goldVoteCount": {$gt : 0} } ).skip(page * 10).limit(10);
};


const getPending = async () => {
  return await Coin.find( { isApproved:false } );
};

const getReportedCoins = async () => {
  return await Coin.find( { totalApprovedReports:{$gt : 0} } );
};


module.exports = {
  getCoinById,
  updateCoinById,
  createCoin,
  deleteCoinById,
  updateVoteValue,
  getAllCoins,
  coinVerification,
  getComments,
  getCoinsNormal,
  getCoinsSilver,
  getCoinsGold,
  getPending,
  getReportedCoins
};