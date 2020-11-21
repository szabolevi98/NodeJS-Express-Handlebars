function routes() {
    const express = require('express');
    const router = express.Router();
    const config = require('./routes.config');
    const htmlSettings = config.htmlSettings;
    const copyRightInfo = config.copyRightInfo;
    const pageNames = config.pageNames;
    const lists = require('./lists');

    router.get('/', (req, res) => {
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
    
    router.get('/work', (req, res) => {
        res.render('work', { 
            htmlSet: htmlSettings,
            copyRight: copyRightInfo,
            name: pageNames.work,
            title: copyRightInfo.companyName + ' - ' + pageNames.work,
            style: 'work.css',
            navNames: pageNames,
            active: 2,
            lists: lists
        });
    });
    
    router.get('/contact', (req, res) => {
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
    
    router.get('/about', (req, res) => {
        res.render('about', { 
            htmlSet: htmlSettings,
            copyRight: copyRightInfo,
            name: pageNames.about,
            title: copyRightInfo.companyName + ' - ' + pageNames.about,
            navNames: pageNames,
            style: 'about.css'
        });
    });
    
    router.get('*', function(req, res){
        res.render('error', { 
            htmlSet: htmlSettings,
            copyRight: copyRightInfo,
            name: pageNames.error,
            title: copyRightInfo.companyName + ' - ' + pageNames.error,
            navNames: pageNames,
            route: JSON.stringify(req.originalUrl)
        });
    });

    return router;
}

module.exports = routes();
