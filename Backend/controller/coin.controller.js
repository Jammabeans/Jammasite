const httpStatus = require('http-status');
const ApiError = require('../utils/ApiError');
const catchAsync = require('../utils/catchAsync');
const  coinService  = require('../service/coin.service');



const getCoins = catchAsync(async (req, res) => {
  const result = await coinService.getAllCoins();
  res.send(result);
});



const createCoin = catchAsync(async (req, res) => {
    const coin = await coinService.createCoin(req.body);
    res.status(httpStatus.CREATED).send(coin);
});

const updateCoin = catchAsync(async (req, res) => {
  const coin = await coinService.updateCoin(req.param.coinId,req.body.coin);
  res.status(httpStatus.OK).send(coin);
});


const getCoin = catchAsync(async (req, res) => {
    const coin = await coinService.getCoinById(req.params.coinId);
    if (!coin) {
      throw new ApiError(httpStatus.NOT_FOUND, 'Coin not found');
    }
    res.send(coin);
  });



const deleteCoin = catchAsync(async (req, res) => {
    await coinService.deleteCoinById(req.params.coinId);
    res.status(httpStatus.NO_CONTENT).send();
  });


const verifyCoin = catchAsync(async (req, res) => {
    const result = await coinService.coinVerification(req.params.coinId);
    res.send(result);
  });

  const getComments = catchAsync(async (req, res) => {
    const result = await coinService.getComments(req.params.coinId);
    res.send(result);
  });

const getNormalCoins = catchAsync(async (req, res) => {
  const result = await coinService.getCoinsNormal(req.params.page);
  res.send(result);
});

const getSilverCoins = catchAsync(async (req, res) => {
  const result = await coinService.getCoinsSilver(req.params.page);
  res.send(result);
});

const getGoldCoins = catchAsync(async (req, res) => {
  const result = await coinService.getCoinsGold(req.params.page);
  res.send(result);
});

const getPendingCoins = catchAsync(async (req, res) => {
  const result = await coinService.getPending();
  res.send(result);
});

const getTotalVotes = catchAsync(async (req, res) => {
  const result = await coinService.getTotalVotes();
  res.send(result);
});

const reportedCoin = catchAsync(async (req, res) => {
  const result = await coinService.getReportedCoins();
  res.send(result);
});

module.exports = {
  getCoin,
  createCoin,
  updateCoin,
  deleteCoin,
  getCoins,
  getComments,
  verifyCoin,
  getNormalCoins,
  getSilverCoins,
  getGoldCoins,
  getPendingCoins,
  getTotalVotes,
  reportedCoin
};