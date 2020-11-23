//Dependencies
const express = require('express');
const app = express();
const expHbs = require('express-handlebars')
const path = require('path');
const config = require('./app.config');

//Handlebars
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

//App config
app.engine(config.extension, hbs.engine);
app.set('view engine', config.extension);
app.use(express.static(path.join(__dirname, config.staticFolder)));

//Routes (external)
const routes = require('./' + path.join(config.routesFolder, config.routesFileName));
app.use(routes);

function setTheme(themeName) {
    localStorage.setItem('theme', themeName);
    document.documentElement.className = themeName;
}

//Server start
const port = process.env.PORT || config.port;
app.listen(port, () => {
    console.log('Server is starting at port: ' + port)
});
