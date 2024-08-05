const mongoose = require('mongoose');

const connectDB = async ()=>{
    await mongoose.connect('mongodb+srv://shivakavali4991:shiva1112@cluster0.1pyskzc.mongodb.net/DoBojanam?').then(()=>console.log("Database Connected"));
}

module.exports = connectDB;