const express = require ('express');
const router = express.Router();
const main = require('../controller/maincontroller');

router.get('/', main.index);
router.get('/about', main.about);
router.get('/contacts', main.contacts);
router.get('/register', main.register);
router.get('/login', main.login);

module.exports = router;