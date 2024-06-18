const express = require('express');
const userModal = require('../Models/datamodel');
const cors = require('cors');
const router = express.Router();
const bcrypt = require('bcryptjs');

const options = {
    origin: 'http://localhost:5173', 
    optionsSuccessStatus: 200
};

router.use(cors(options));

// Create
router.post('/adduser', async (req, res) => {
    let { name, password, shop, Meeting } = req.body;
    console.log(req.body);

    try {
        // Check if a user with the same name already exists
        const existingUser = await userModal.findOne({ name: name });
        const salt = await bcrypt.genSalt(10);
        const hashedpassword = await bcrypt.hash(password, salt);

        if (existingUser) {
            return res.status(400).send('User with the same name already exists');
        }

        // Create a new user
        const newUser = new userModal({ name, password: hashedpassword, shop, Meeting });
        const savedUser = await newUser.save();

        res.status(201).json('User logged in');
    } catch (err) {
        console.error('Failed to add user:', err);
        res.status(500).send(err.message || 'Internal Server Error');
    }
});

// Retrieve all users
router.get('/adduser', async (req, res) => {
    try {
        const users = await userModal.find({});
        res.status(200).json(users);
    } catch (err) {
        console.error('Failed to retrieve users:', err);
        res.status(500).send('Internal Server Error');
    }
});

// Retrieve a user by ID
router.get('/:id', async (req, res) => {
    try {
        const user = await userModal.findOne({ _id: req.params.id });
        if (!user) {
            return res.status(404).send('User not found');
        }
        res.status(200).send(user);
    } catch (err) {
        console.error('Failed to retrieve user:', err);
        res.status(500).send('Internal Server Error');
    }
});

module.exports = router;
