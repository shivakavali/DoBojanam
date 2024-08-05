const { message } = require('statuses');
const foodModel = require('../models/foodModel.js');
const fs = require('fs');

const addFood = async (req, res) => {
    let image_filename = req.file.filename;

    const { name, description, price, category } = req.body;

    try {
        if (!name || !description || !price || !category) {
            return res.status(400).json({ success: false, message: "All fields are required." });
        }

        const food = new foodModel({
            name,
            description,
            price,
            category,
            image: image_filename
        });

        await food.save();

        res.json({ success: true, message: "Food Added" });
    } catch (error) {
        console.error("Error adding food:", error);

        res.status(500).json({ success: false, message: "Failed to add food." });
    }
};

//List Food Items
const listFood = async (req, res)=>{
    try{
        const foods = await foodModel.find({});
        res.json({success:true, data:foods});
    }catch(error){
        console.log(error);
        res.json({success:false, message:`Error: ${error}`});
    }
}


const removeFood = async (req, res)=>{
    try{
        const food = await foodModel.findById(req.body.id);
        fs.unlink(`uploads/${food.image}`, ()=>{})
        await foodModel.findByIdAndDelete(req.body.id);
        res.json({success:true, message:"Food Removed"});
    }catch(error){
        console.log(error);
        res.json({success:false, message:`Error ${error}`});
    }
}

module.exports = {addFood, listFood, removeFood};
