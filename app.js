const express = require('express');
const app = express();
const expHbs = require('express-handlebars')
const path = require('path');
const favicon = require('serve-favicon'); 
const appSettings = require('./' + path.join('config', 'settings')).appSettings;

const hbs = expHbs.create({
    defaultLayout: appSettings.defaultLayoutName,
    layoutsDir: path.join(__dirname, appSettings.viewFolder, appSettings.layoutsFolder),
    partialsDir: path.join(__dirname, appSettings.viewFolder, appSettings.partialsFolder),
    extname: `.${appSettings.extension}`,
    helpers: {
        ifEquals: function(arg1, arg2, options) {
            return (arg1 == arg2) ? options.fn(this) : options.inverse(this);
        },
        ifNotEquals: function(arg1, arg2, options) {
            return (arg1 != arg2) ? options.fn(this) : options.inverse(this);
        }
    }
});

app.engine(appSettings.extension, hbs.engine);
app.set('view engine', appSettings.extension);
app.use(express.static(path.join(__dirname, appSettings.staticFolder)));
app.use(favicon(path.join(__dirname, appSettings.staticFolder, appSettings.faviconFolder, appSettings.faviconName)));
app.use(require('./config/routes'));
  
const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log('Server is starting at port: ' + port)
});
