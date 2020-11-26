//Dependencies
const express = require('express');
const router = express.Router();
const config = require('./routes.config');
const path = require('path');
const messageModel = require(path.join(__dirname, '..', 'models', 'Message'));

//Route contact
router.route('/')
.get((req, res) => {
    res.render('contact', { 
        htmlSet: config.htmlSettings,
        copyRight: config.copyRightInfo,
        navNames: config.pageNames,
        name: config.pageNames.contact,
        title: config.pageNames.contact + ' - ' + config.copyRightInfo.name,
        style: 'contact.css'
    });
})
.post(express.urlencoded({extended: false}), async(req, res) => {
    const messageObject = {
        name: req.body.name,
        email: req.body.email,
        phone: req.body.phone,
        subject: req.body.subject,
        comment: req.body.comment
    };
    if (messageObject.name && messageObject.email && messageObject.phone && messageObject.subject && messageObject.comment)
    {
        try {
            const postMessage = new messageModel(messageObject);
            await postMessage.save();
            res.render('contact', { 
                htmlSet: config.htmlSettings,
                copyRight: config.copyRightInfo,
                navNames: config.pageNames,
                name: config.pageNames.contact,
                title: config.pageNames.contact + ' - ' + config.copyRightInfo.name,
                style: 'contact.css',
                formSuccess: true,
                message: messageObject,
            });

        } 
        catch (err) {
            res.render('error', { 
                htmlSet: config.htmlSettings,
                copyRight: config.copyRightInfo,
                navNames: config.pageNames,
                name: config.pageNames.error,
                title: config.pageNames.error + ' - ' + config.copyRightInfo.name,
                specificMessage: err.message
            });
        }
    }
    else
    {
        let list = [];
        if (!messageObject.name) list.push('Név');
        if (!messageObject.email) list.push('Email');
        if (!messageObject.phone) list.push('Telefon');
        if (!messageObject.subject) list.push('Tárgy');
        if (!messageObject.comment) list.push('Üzenet');
        res.render('contact', { 
            htmlSet: config.htmlSettings,
            copyRight: config.copyRightInfo,
            navNames: config.pageNames,
            name: config.pageNames.contact,
            title: config.pageNames.contact + ' - ' + config.copyRightInfo.name,
            style: 'contact.css',
            formError: true,
            errorList: list,
            formData: messageObject
        });
    }
});

module.exports = router;
