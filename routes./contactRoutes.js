const express = require('express');
const express = require('express');
const router = express.Router();
const { addContact, getAllContacts } = require('../controllers/contactcontroller');

router.post('/contacts', addContact);

router.get('/contacts', getAllContacts);

module.exports = router;
