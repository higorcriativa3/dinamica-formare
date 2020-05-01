const express = require('express');

const router = express.Router();
const Messages = require('../models/Messages');

router.get('/', async (req, res) => {
  try{
    const messages = await Messages.find();
    res.json(messages);
  }catch (err) {
    res.json({ message: err });
  }
})

module.exports = router;