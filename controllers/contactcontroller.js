const Contact = require('../models/contact');

exports.addContact = async (req, res) => {
  try {
    const { name, email, phone } = req.body;
    if (!name || !email || !phone) {
      return res.status(400).json({ message: 'Name, email, and phone are required' });
    }
    const newContact = new Contact({ name, email, phone });
    await newContact.save();
    res.status(201).json({ message: 'Contact added successfully', contact: newContact });
  } catch (error) {
    console.error('Error in addContact:', error);
    res.status(500).json({ message: 'Server error', error: error.message || error });
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
