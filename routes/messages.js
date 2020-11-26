//Dependencies
const express = require('express');
const router = express.Router();
const config = require('./routes.config');
const path = require('path');
const messageModel = require(path.join(__dirname, '..','models','Message'));

//Route messages
router.route('/')
.get(async(req, res) => {
    res.render('messages', { 
        htmlSet: config.htmlSettings,
        copyRight: config.copyRightInfo,
        navNames: config.pageNames,
        name: config.pageNames.messages,
        title: config.pageNames.messages + ' - ' + config.copyRightInfo.name,
        messagesList: await messageModel.find().lean()
    });
})
.post(express.urlencoded({extended: false}), async(req, res) => {
    console.log(req.body._id);
    if (req.body._id && (req.body.secretKey == process.env.secret_key))
    {
        try {
            await messageModel.remove({ _id: req.body._id });
            res.render('messages', { 
                htmlSet: config.htmlSettings,
                copyRight: config.copyRightInfo,
                navNames: config.pageNames,
                name: config.pageNames.messages,
                title: config.pageNames.messages + ' - ' + config.copyRightInfo.name,
                messagesList: await messageModel.find().lean(),
                messageRemoved: true
            });
        } 
        catch (err) {
            res.send(`Error happened: ${err.message}`);
        }
    }
    else {
        res.render('messages', { 
            htmlSet: config.htmlSettings,
            copyRight: config.copyRightInfo,
            navNames: config.pageNames,
            name: config.pageNames.messages,
            title: config.pageNames.messages + ' - ' + config.copyRightInfo.name,
            messagesList: await messageModel.find().lean(),
            wrongSecretKey: true
        });
    }
});


module.exports = router;
