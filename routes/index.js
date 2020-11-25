//Dependencies
const router = require('express').Router();
const config = require('./routes.config');

//Route messages
router.get('/', (req, res) => {
    res.render('index', { 
        htmlSet: config.htmlSettings,
        copyRight: config.copyRightInfo,
        navNames: config.pageNames,
        name: config.pageNames.index,
        title: config.pageNames.index + ' - ' + config.copyRightInfo.name,
        style: 'index.css'
    });
});

module.exports = router;
