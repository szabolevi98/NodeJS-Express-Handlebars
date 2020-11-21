function work() {
    const router = require('express').Router();
    const config = require('./routes.config');
    const htmlSettings = config.htmlSettings;
    const copyRightInfo = config.copyRightInfo;
    const pageNames = config.pageNames;
    const lists = [
        {
            items: [ 'item1', 'item2', 'item3' ],
            elements: [ 'element1', 'element2', 'element3' ]
        },
        {
            items: [ 'item4', 'item5', 'item6' ],
            elements: [ 'element4', 'element5', 'element6' ]
        }
    ]

    router.get('/work', (req, res) => {
        res.render('work', { 
            htmlSet: htmlSettings,
            copyRight: copyRightInfo,
            name: pageNames.work,
            title: copyRightInfo.companyName + ' - ' + pageNames.work,
            style: 'work.css',
            navNames: pageNames,
            active: 2,
            lists: lists
        });
    });
    
    return router;
}

module.exports = work();
