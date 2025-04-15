const express = require('express');
const router = express.Router();
const { addContact } = require('../controllers/contactcontroller');

router.post('/contacts', addContact);


module.exports = router;
