const express = require('express');
const app = express();
const expHbs = require('express-handlebars')
const path = require('path');
const favicon = require('serve-favicon'); 
const config = require('./app.config');

const hbs = expHbs.create({
    defaultLayout: config.defaultLayoutName,
    layoutsDir: path.join(__dirname, config.viewFolder, config.layoutsFolder),
    partialsDir: path.join(__dirname, config.viewFolder, config.partialsFolder),
    extname: `.${config.extension}`,
    helpers: {
        ifEquals: function(arg1, arg2, options) {
            return (arg1 == arg2) ? options.fn(this) : options.inverse(this);
        },
        ifNotEquals: function(arg1, arg2, options) {
            return (arg1 != arg2) ? options.fn(this) : options.inverse(this);
        }
    }
});

app.engine(config.extension, hbs.engine);
app.set('view engine', config.extension);
app.use(express.static(path.join(__dirname, config.staticFolder)));
app.use(favicon(path.join(__dirname, config.staticFolder, config.faviconFolder, config.faviconName)));
app.use(require('./' + path.join(config.routesFolder,config.routesFileName)));
  
const port = process.env.PORT || config.port;
app.listen(port, () => {
    console.log('Server is starting at port: ' + port)
});
