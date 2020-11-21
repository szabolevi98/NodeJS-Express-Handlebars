function contact() {
    const router = require('express').Router();
    const config = require('./routes.config');
    const htmlSettings = config.htmlSettings;
    const copyRightInfo = config.copyRightInfo;
    const pageNames = config.pageNames;

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

    return router;
}

module.exports = contact();
