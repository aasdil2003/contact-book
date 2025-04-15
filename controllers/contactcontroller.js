const Contact = require('../models/contact');

exports.addContact = async (req, res) => {
  try {
    const { name, email } = req.body;

    if (!name || !email || !phone) {
      return res.status(400).json({ message: 'Name and email are required' });
    }

    const newContact = new Contact({ name, email });
    await newContact.save();

    res.status(201).json({ message: 'Contact added successfully', contact: newContact });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error });
  }
};
exports.getAllContacts = async (req, res) => {
  try {
    const contacts = await Contact.find();
    res.status(200).json(contacts);
  } catch (error) {
    res.status(500).json({ message: 'Server error', error });
  }
};
