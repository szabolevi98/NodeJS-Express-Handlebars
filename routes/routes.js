//Dependencies
const router = require('express').Router();

//Routes
router.use('/', require('./index'));
router.use('/work', require('./work'));
router.use('/contact', require('./contact'));
router.use('/messages', require('./messages'));
router.use('/about', require('./about'));
router.use('*', require('./error'));

module.exports = router;
