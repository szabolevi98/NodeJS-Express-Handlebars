//Dependencies
const router = require('express').Router();
const config = require('./routes.config');

const workList = [
    {
        items: [ 'item1', 'item2', 'item3' ],
        elements: [ 'element1', 'element2', 'element3' ]
    },
    {
        items: [ 'item4', 'item5', 'item6' ],
        elements: [ 'element4', 'element5', 'element6' ]
    }
];

//Route work
router.get('/', (req, res) => {
    res.render('work', { 
        htmlSet: config.htmlSettings,
        copyRight: config.copyRightInfo,
        navNames: config.pageNames,
        name: config.pageNames.work,
        title: config.pageNames.work + ' - ' + config.copyRightInfo.name,
        style: 'work.css',
        lists: workList
    });
});

module.exports = router;
