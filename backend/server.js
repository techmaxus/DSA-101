const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const cors= require('cors');
const mongoose = require('mongoose');
const blogRoutes=require('./routes/blog')

require('dotenv').config();
//app

const app = express();

//db
mongoose
    .connect(process.env.DATABASE)
    .then(() => console.log('DB connected'));
//middleware use by app
// morgan specify what enivironment it is now it is at development environment
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(cookieParser());
//cors 
if(process.env.NODE_ENV = 'development'){
    app.use(cors({origi: `${process.env.CLIENT_URL}`}));
}
app.use(cors());

//routes middleware
app.use('/api',blogRoutes);


//accessing port value from env file or run the or value
 const port =process.env.PORT || 8000;
 app.listen(port,()=>{
     console.log(`Server is running on port ${port}`);
 })