function about() {
    const router = require('express').Router();
    const config = require('./routes.config');
    const htmlSettings = config.htmlSettings;
    const copyRightInfo = config.copyRightInfo;
    const pageNames = config.pageNames;

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

    return router;
}

module.exports = about();
