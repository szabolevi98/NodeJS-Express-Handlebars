function index() {
    const router = require('express').Router();
    const config = require('./routes.config');
    const htmlSettings = config.htmlSettings;
    const copyRightInfo = config.copyRightInfo;
    const pageNames = config.pageNames;

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

    return router;
}

module.exports = index();
