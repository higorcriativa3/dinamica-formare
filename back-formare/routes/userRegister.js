const express = require('express');

const router = express.Router();
const User = require('../models/User');

router.post('/', async (req, res) => {
  const { name, username } = req.body;
  const user = new User({
    name: name,
    username: username
  });

  try{
    const registeredUser = await user.save();
    res.json(registeredUser);
  }catch (err) {
    res.json({ message: err });
  }
})

module.exports = router;