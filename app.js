//Dependencies
const express = require('express');
const app = express();
const expHbs = require('express-handlebars')
const mongoose = require('mongoose');
const path = require('path');
const appConfig = require('./app.config');
require('dotenv').config();

//Handlebars
const hbs = expHbs.create({
    defaultLayout: appConfig.defaultLayoutName,
    layoutsDir: path.join(__dirname, appConfig.viewFolder, appConfig.layoutsFolder),
    partialsDir: path.join(__dirname, appConfig.viewFolder, appConfig.partialsFolder),
    extname: `.${appConfig.extension}`,
    helpers: {
        ifEquals: function(arg1, arg2, options) {
            return (arg1 == arg2) ? options.fn(this) : options.inverse(this);
        },
        ifNotEquals: function(arg1, arg2, options) {
            return (arg1 != arg2) ? options.fn(this) : options.inverse(this);
        }
    }
});

//App config
app.engine(appConfig.extension, hbs.engine);
app.set('view engine', appConfig.extension);
app.use(express.static(path.join(__dirname, appConfig.staticFolder)));

//Routes (external)
const routes = require(path.join(__dirname, appConfig.routesFolder, appConfig.routesFileName));
app.use('/', routes);

//Connect to MongoDB
mongoose.connect(process.env.DB_CONNECTION, 
    { useNewUrlParser: true, useUnifiedTopology: true }, 
    (err) => {
      if (err) {
          console.log('Unable to connect to the database:', err.message);
      }
      else {
          console.log('Connected to the database successfully!');
      }
    }
);

//Server start
const port = process.env.PORT || appConfig.port;
app.listen(port, () => {
    console.log('Server is starting at port: ' + port)
});
