const express = require('express');

const router = express.Router();
const User = require('../models/User');

router.post('/', async (req, res) => {
  const { username } = req.body;

  try{
    const user = await User.find({
      username: username
    },'name');

    console.log(user)

    if(user.length == 0){
      return res.status(400).json({ error: 'Não foi possível encontrar o usuário' });
    }
    return res.json(user);
  
  }catch (err) {
    res.json({ message: err });
  }
})

module.exports = router;