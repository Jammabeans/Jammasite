const express = require('express');
const userRoute = require('./user.route');
const adminRoute = require('./admin.route')
const coinRoute = require('./coin.route');
const commentRoute = require('./comment.route');
const reportRoute = require('./report.route');
const router = express.Router();

const defaultRoutes = [
//   {
//     path: '/admin',
//     route: authRoute,
//   },
  {
    path: '/users',
    route: userRoute,
  },
  {
    path: '/admin',
    route: adminRoute,
  },
  {
    path: '/coins',
    route: coinRoute,
  },
  {
    path: '/reports',
    route: reportRoute,
  },
  {
    path: '/comments',
    route: commentRoute,
  },
];

defaultRoutes.forEach((route) => {
  router.use(route.path, route.route);
});

module.exports = router;