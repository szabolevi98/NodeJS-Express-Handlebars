//Dependencies
const router = require('express').Router();
const fs = require('fs');
const path = require('path');
const config = require('./routes.config');
const appConfig = require('./../app.config');
const messageFile = './' +  path.join(appConfig.staticFolder, appConfig.messageFileName);


//Route messages
router.get('/', (req, res) => {
    res.render('messages', { 
        htmlSet: config.htmlSettings,
        copyRight: config.copyRightInfo,
        navNames: config.pageNames,
        name: config.pageNames.messages,
        title: config.pageNames.messages + ' - ' + config.copyRightInfo.name,
        messagesList: (() => {
            if (config.htmlSettings.viewMessages && fs.existsSync(messageFile))
            {
                return JSON.parse(fs.readFileSync(messageFile));
            }
            else {
                return false;
            }
        }),
        messageFileName: appConfig.messageFileName
    });
});

module.exports = router;
