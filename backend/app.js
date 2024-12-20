const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
const dotenv = require('dotenv').config();
const morgan = require('morgan');

const AppError = require('./src/utils/appError');
const globalErrorHandler = require('./src/controllers/errorController')
const userRouter = require('./src/routes/UserRoute');
const materialRouter = require('./src/routes/MaterialRoute');
const projetoRoute = require('./src/routes/ProjetoRoute');
const mongoose = require('mongoose');

if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
};


app.use(express.json());
app.use(express.static(`${__dirname}/public`));

app.use('/users', userRouter );
app.use('/material', materialRouter);
app.use('/projeto', projetoRoute);

app.all('*', (req, res, next) =>{
  next(new AppError(`Can't find ${req.originalUrl} on this server!`, 404));
});

app.use(globalErrorHandler);

module.exports = app;