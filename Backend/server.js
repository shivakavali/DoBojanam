const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const connectDB = require('./config/db.js');
const foodRouter  = require('./routes/foodRoute.js');

//App Config
const app = express();
const  PORT = 4000;


app.use(cors())
app.use(express.json());

//connect DB
connectDB();

app.use("/api/food", foodRouter);
app.use("/images", express.static('uploads'));

app.get('/', (req, res)=>{
    res.json("API is running");
})


app.listen(PORT, ()=>{console.log(`Server is running in PORT: ${PORT}`)});
