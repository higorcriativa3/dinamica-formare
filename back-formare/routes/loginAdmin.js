const express = require('express');

const router = express.Router();
const Admin = require('../models/Admin');

router.post('/', async (req, res) => {
  const { username, password } = req.body;

  try{
    const admin = await Admin.find({
      username: username,
      password: password
    },'name');
    if(admin.length == 0){
      return res.status(400).json({ error: 'Não foi possível encontrar o usuário' });
    }
    return res.json(admin);
  }catch (err) {
    res.json({ message: err });
  }
})

module.exports = router;