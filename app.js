const express = require('express');
const app = express();
const expHbs = require('express-handlebars')
const path = require('path');
const favicon = require('serve-favicon'); 

const appSettings = {
    extension: 'hbs', 
    staticFolder: 'public',
    viewFolder: 'views',
    layoutsFolder: 'layouts',
    partialsFolder: 'partials',
    faviconFolder: 'images',
    faviconName: 'favicon.ico',
    defaultLayoutName: 'main'
};

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

const htmlSettings = {
    language : 'hu',
    characterSet : 'UTF-8',
    cssFolder: 'css',
    imagesFolder: 'images'
}

const copyRightInfo = {
    companyName : 'Példa Név',
    currentYear : new Date().getFullYear()
}

const pageNames = {
    index: 'Kezdőlap',
    work: 'Feladat',
    contact: 'Kapcsolat',
    about: 'Rólunk',
    error: 'Hiba - 404'
}

app.get('/', (req, res) => {
    res.render('index', { 
        htmlSet: htmlSettings,
        copyRight: copyRightInfo,
        name: pageNames.index,
        title: copyRightInfo.companyName + ' - ' + pageNames.index,
        style: 'index.css',
        navNames: pageNames,
        active: 1
    });
});

app.get('/work', (req, res) => {
    res.render('work', { 
        htmlSet: htmlSettings,
        copyRight: copyRightInfo,
        name: pageNames.work,
        title: copyRightInfo.companyName + ' - ' + pageNames.work,
        style: 'work.css',
        navNames: pageNames,
        active: 2,
        lists: [
            {
                items: [ 'item1', 'item2', 'item3' ],
                elements: [ 'element1', 'element2', 'element3' ]
            },
            {
                items: [ 'item4', 'item5', 'item6' ],
                elements: [ 'element4', 'element5', 'element6' ]
            }
        ]
    });
});

app.get('/contact', (req, res) => {
    res.render('contact', { 
        htmlSet: htmlSettings,
        copyRight: copyRightInfo,
        name: pageNames.contact,
        title: copyRightInfo.companyName + ' - ' + pageNames.contact,
        style: 'contact.css',
        navNames: pageNames,
        active: 3
    });
});

app.get('/about', (req, res) => {
    res.render('about', { 
        htmlSet: htmlSettings,
        copyRight: copyRightInfo,
        name: pageNames.about,
        title: copyRightInfo.companyName + ' - ' + pageNames.about,
        navNames: pageNames,
        style: 'about.css'
    });
});

app.get('*', function(req, res){
    res.render('error', { 
        htmlSet: htmlSettings,
        copyRight: copyRightInfo,
        name: pageNames.error,
        title: copyRightInfo.companyName + ' - ' + pageNames.error,
        navNames: pageNames,
        route: JSON.stringify(req.originalUrl)
    });
});
  

const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log('Server is starting at port: ' + port)
});
