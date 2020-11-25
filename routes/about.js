//Dependencies
const router = require('express').Router();
const config = require('./routes.config');

//Route about
router.get('/', (req, res) => {
    res.render('about', { 
        htmlSet: config.htmlSettings,
        copyRight: config.copyRightInfo,
        navNames: config.pageNames,
        name: config.pageNames.about,
        title: config.pageNames.about + ' - ' + config.copyRightInfo.name,
        style: 'about.css'
    });
});

module.exports = router;
