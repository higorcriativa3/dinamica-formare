const express = require('express');

const router = express.Router();
const Message = require('../models/Messages');

router.post('/', async (req, res) => {
  const { user, message, today, time } = req.body;
  const messageToRegister = new Message({
    user: user,
    message: message,
    day: today,
    hour: time
  });

  try{
    const savedMessage = await messageToRegister.save();
    res.json(savedMessage);
  }catch (err) {
    res.json({ message: err });
  }
})

module.exports = router;