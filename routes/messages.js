//Dependencies
const router = require('express').Router();
const config = require('./routes.config');
const path = require('path');
const messageModel = require(path.join(__dirname, '..','models','Message'));

//Route messages
router.get('/', async(req, res) => {
    res.render('messages', { 
        htmlSet: config.htmlSettings,
        copyRight: config.copyRightInfo,
        navNames: config.pageNames,
        name: config.pageNames.messages,
        title: config.pageNames.messages + ' - ' + config.copyRightInfo.name,
        messagesList: await messageModel.find().lean()
    });
});

module.exports = router;
