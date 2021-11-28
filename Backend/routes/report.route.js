const express = require('express');
const reportController = require('../controller/report.controller');

const router = express.Router();


router
    .route('/')
    .get(reportController.getReports)
    .post(reportController.createReport)
    

router
  .route('/:coinId')
  .get(reportController.getCoinReports)

router
  .route('/approve/:reportId')
  .get(reportController.approveReport)



module.exports = router;