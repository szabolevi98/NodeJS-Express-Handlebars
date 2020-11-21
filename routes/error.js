function error() {
    const router = require('express').Router();
    const config = require('./routes.config');
    const htmlSettings = config.htmlSettings;
    const copyRightInfo = config.copyRightInfo;
    const pageNames = config.pageNames;

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

module.exports = error();
