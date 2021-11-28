const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const routes = require('./routes');
const dotenv = require('dotenv')
const ApiError = require('./utils/ApiError');
const httpStatus = require('http-status');
const { errorConverter, errorHandler } = require('./error');

dotenv.config()

const app = express()

app.use(cors())
app.use(express.json())
app.use(logger)
app.use('/v1', routes);
app.use((req, res, next) => {
    next(new ApiError(httpStatus.NOT_FOUND, 'Not found'));
});



app.use(errorConverter);

// handle error
app.use(errorHandler);








function logger(req, res, next){
    console.log("Request Url")
    console.log(req.url)
    if(req.params && Object.keys(req.params).length !== 0 && req.params.constructor === Object){
        console.log("Request Params")
        console.log(req.params)
    }
    if(req.body && Object.keys(req.body).length !== 0 && req.body.constructor === Object){
        console.log("Request Body")
        console.log(req.body)
    }
    next()
}



mongoose.connect(
    process.env.MONGOOSE,
    () => console.log("Database conencted")
);
app.listen(process.env.PORT || 6900, () => console.log(`Server is Running on PORT: ${process.env.PORT}`))