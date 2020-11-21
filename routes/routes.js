function routes() {
    const router = require('express').Router();

    router.use(require('./index'));
    router.use(require('./work'));
    router.use(require('./contact'));
    router.use(require('./about'));
    router.use(require('./error'));

    return router;
}

module.exports = routes();
