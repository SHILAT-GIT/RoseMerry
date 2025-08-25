const express = require('express');
const router = express.Router();

const User = require('../models/User');

router.get('/users', async (_, res) => {
    try {
        const users = await Apartment.find();
        res.send({ users });
    } catch (err) {
        res.status(500).send({ message: 'שגיאה בשרת' });
    }
});

module.exports = router;