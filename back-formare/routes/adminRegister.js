const express = require('express');

const router = express.Router();
const Admin = require('../models/Admin');

router.post('/', async (req, res) => {
  const { name, username, password } = req.body;
  const admin = new Admin({
    name: name,
    username: username,
    password: password
  });

  try{
    const registeredAdmin = await admin.save();
    res.json(registeredAdmin);
  }catch (err) {
    res.json({ message: err });
  }
})

module.exports = router;