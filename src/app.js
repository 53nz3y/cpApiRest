const express = require('express');
const userRoutes = require('./routes/userRoutes');
const errorHandler = require('./middleware/errorHandler');

 //==============create express app ==============

 const app = express();

 //=======middleware =========

 app.use(express.json());

 //======== routes =====

 app.use('/', userRoutes);

 //=========== errorhanling ==========

 app.use(errorHandler);

 //========= exports ==========
  module.exports = app;
