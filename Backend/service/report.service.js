const  Report  = require('../Models/report.model');
const User = require('../Models/user.model')
const Coin = require('../Models/coin.model')

const createReport = async (reportBody) => {

  return await Report.create(reportBody);

};

const approveReport = async (reportId) => {
    const report = await Report.findByIdAndUpdate(reportId,{isApproved: true})

    await Coin.findByIdAndUpdate(report.coinId,{$push:{reportIds:reportId}, $inc:{totalApprovedReports: 1}})
    
    return report
};

const getAllReports = async () => {
    const report = await Report.find({isApproved:false})
    .populate({
      path:'userId',
      model:'User'
    })
    .populate({
      path:'coinId',
      model:'Coin'
    });
    console.log(report)
    return report
}


const getCoinReports = async ( coinId ) => {
    const report = await Report.find( { toCoinId: coinId } )
    return report
}


module.exports = {
    createReport,
    getCoinReports,
  approveReport,
  getAllReports
};