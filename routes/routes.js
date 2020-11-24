function routes() {
    //Dependencies
    const express = require('express');
    const router = express.Router();
    const path = require('path');
    const fs = require('fs'); 
    const config = require('./routes.config');
    const appConfig = require('./../app.config');
    const htmlSettings = config.htmlSettings;
    const copyRightInfo = config.copyRightInfo;
    const pageNames = config.pageNames;
    const messageFile = './' +  path.join(appConfig.staticFolder, appConfig.messageFileName);

    //Router config
    router.use(express.json());

    //Routes
    router.get('/', (req, res) => {
        res.render('index', { 
            htmlSet: htmlSettings,
            copyRight: copyRightInfo,
            navNames: pageNames,
            name: pageNames.index,
            title: pageNames.index + ' - ' + copyRightInfo.name,
            style: 'index.css'
        });
    });

    router.get('/work', (req, res) => {
        res.render('work', { 
            htmlSet: htmlSettings,
            copyRight: copyRightInfo,
            navNames: pageNames,
            name: pageNames.work,
            title: pageNames.work + ' - ' + copyRightInfo.name,
            style: 'work.css',
            lists: [
                {
                    items: [ 'item1', 'item2', 'item3' ],
                    elements: [ 'element1', 'element2', 'element3' ]
                },
                {
                    items: [ 'item4', 'item5', 'item6' ],
                    elements: [ 'element4', 'element5', 'element6' ]
                }
            ]
        });
    });

    router.get('/contact', (req, res) => {
        res.render('contact', { 
            htmlSet: htmlSettings,
            copyRight: copyRightInfo,
            navNames: pageNames,
            name: pageNames.contact,
            title: pageNames.contact + ' - ' + copyRightInfo.name,
            style: 'contact.css'
        });
    });

    router.get('/about', (req, res) => {
        res.render('about', { 
            htmlSet: htmlSettings,
            copyRight: copyRightInfo,
            navNames: pageNames,
            name: pageNames.about,
            title: pageNames.about + ' - ' + copyRightInfo.name,
            style: 'about.css'
        });
    });

    router.get('/messages', (req, res) => {
        res.render('messages', { 
            htmlSet: htmlSettings,
            copyRight: copyRightInfo,
            navNames: pageNames,
            name: pageNames.messages,
            title: pageNames.messages + ' - ' + copyRightInfo.name,
            messagesList: (() => {
                if (htmlSettings.viewMessages && fs.existsSync(messageFile))
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

    router.get('*', function(req, res){
        res.render('error', { 
            htmlSet: htmlSettings,
            copyRight: copyRightInfo,
            navNames: pageNames,
            name: pageNames.error,
            title: pageNames.error + ' - ' + copyRightInfo.name,
            route: JSON.stringify(req.originalUrl)
        });
    });
   
    router.post('/contact', express.urlencoded({extended: false}), function(req, res) {
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
                htmlSet: htmlSettings,
                copyRight: copyRightInfo,
                navNames: pageNames,
                name: pageNames.contact,
                title: pageNames.contact + ' - ' + copyRightInfo.name,
                style: 'contact.css',
                formSuccess: true,
                message: objContact,
                messageFileName: appConfig.messageFileName
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
                htmlSet: htmlSettings,
                copyRight: copyRightInfo,
                navNames: pageNames,
                name: pageNames.contact,
                title: pageNames.contact + ' - ' + copyRightInfo.name,
                style: 'contact.css',
                formError: true,
                errorList: list,
                formData: objContact
            });
        }
    });

    return router;
}

module.exports = routes();
