//Dependencies
const router = require('express').Router();
const config = require('./routes.config');

//Route error
router.get('/', function(req, res){
    res.render('error', { 
        htmlSet: config.htmlSettings,
        copyRight: config.copyRightInfo,
        navNames: config.pageNames,
        name: config.pageNames.error,
        title: config.pageNames.error + ' - ' + config.copyRightInfo.name,
        route: JSON.stringify(req.originalUrl)
    });
});

module.exports = router;
