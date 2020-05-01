const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

app.use(cors());

app.use(bodyParser.json());

//Import Routes
const messageRegistrationRoute = require('./routes/messageRegister');
const loginRoute = require('./routes/login');
const userRegisterRoute = require('./routes/userRegister');
const messages = require('./routes/messages');
const adminRoute = require('./routes/loginAdmin');
const adminRegisterRoute = require('./routes/adminRegister');

//Routes
app.use('/msgReg', messageRegistrationRoute);
app.use('/login', loginRoute);
app.use('/register', userRegisterRoute);
app.use('/adminRegister', adminRegisterRoute);
app.use('/messages', messages);
app.use('/admin', adminRoute);

//Connect to DB
mongoose.connect('mongodb://higor:drumxdjbass1092@cluster0-shard-00-00-zuyob.mongodb.net:27017,cluster0-shard-00-01-zuyob.mongodb.net:27017,cluster0-shard-00-02-zuyob.mongodb.net:27017/newPosts?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin&retryWrites=true&w=majority', { 
  useNewUrlParser: true,
  useUnifiedTopology: true
}
);

app.listen(3333);

