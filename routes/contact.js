//Dependencies
const express = require('express');
const router = express.Router();
const fs = require('fs');
const path = require('path');
const config = require('./routes.config');
const appConfig = require('./../app.config');
const messageFile = './' +  path.join(appConfig.staticFolder, appConfig.messageFileName);

//Router config
router.use(express.json());

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
.post(express.urlencoded({extended: false}), (req, res) => {
    const objContact = {
        name: req.body.name,
        email: req.body.email,
        phone: req.body.phone,
        subject: req.body.subject,
        comment: req.body.comment
    }
    if (objContact.name && objContact.email && objContact.phone && objContact.subject && objContact.comment)
    {
        if (fs.existsSync(messageFile))
        {
            const tempData = JSON.parse(fs.readFileSync(messageFile));
            tempData.push(objContact);
            fs.writeFileSync(messageFile, JSON.stringify(tempData, null, '\t'));
        }
        else {
            fs.writeFileSync(messageFile, JSON.stringify([objContact], null, '\t'));
        }
        res.render('contact', { 
            htmlSet: config.htmlSettings,
            copyRight: config.copyRightInfo,
            navNames: config.pageNames,
            name: config.pageNames.contact,
            title: config.pageNames.contact + ' - ' + config.copyRightInfo.name,
            style: 'contact.css',
            formSuccess: true,
            message: objContact,
        });
    }
    else
    {
        let list = [];
        if (!objContact.name) list.push('Név');
        if (!objContact.email) list.push('Email');
        if (!objContact.phone) list.push('Telefon');
        if (!objContact.subject) list.push('Tárgy');
        if (!objContact.comment) list.push('Üzenet');
        res.render('contact', { 
            htmlSet: config.htmlSettings,
            copyRight: config.copyRightInfo,
            navNames: config.pageNames,
            name: config.pageNames.contact,
            title: config.pageNames.contact + ' - ' + config.copyRightInfo.name,
            style: 'contact.css',
            formError: true,
            errorList: list,
            formData: objContact
        });
    }
});

module.exports = router;
