const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const cors= require('cors');
require('dotenv').config();
//app

const app = express();
//middleware use by app
// morgan specify what enivironment it is now it is at development environment
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(cookieParser());
//cors 
app.use(cors());
//routes 
app.get('/api',(req, res) => {
    res.json({time:Date().toString()});
 })

//accessing port value from env file or run the or value
 const port =process.env.PORT || 8000;
 app.listen(port,()=>{
     console.log(`Server is running on port ${port}`);
 })