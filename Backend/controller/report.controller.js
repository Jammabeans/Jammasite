const httpStatus = require('http-status');
const ApiError = require('../utils/ApiError');
const catchAsync = require('../utils/catchAsync');
const  reportService  = require('../service/report.service');




const createReport = catchAsync(async (req, res) => {
    const report = await reportService.createReport(req.body);
    res.status(httpStatus.CREATED).send(report);
});



const getReports = catchAsync(async (req, res) => {
  const result = await reportService.getAllReports();
  res.send(result);
});



const getCoinReports = catchAsync(async (req, res) => {
    const result = await reportService.getReportsByCoin(req.params.coinId);
    res.send(result);
});

const approveReport = catchAsync(async (req, res) => {
    const result = await reportService.approveReport(req.params.reportId);
    res.send(result);
});
  



module.exports = {
  getReports,
  createReport,
  getCoinReports,
  approveReport
};