const mongoose = require("mongoose")

const ProductSchema = new mongoose.Schema({
 name:{
    type: String,
    required: true,
 },
 description:{
    type: String,
    required: true,
 },
 category:{
    type: String,
    enum:["clothing", "footwear", "accesories", "vitamins"],
    required: true,
 },
 image:{
    type: String,
    required: true,
 },
 brand:{
    type: String,
    required: true,
 },
 color:{
    type:String
 },
 gender:{
    type: String,
    enum:["unisex","women","men"]
 },

 size:{
    type: String,
 },
 price:{
    type: Number,
    required: true,
 }

},{timestamps: true});

const Product = mongoose.model("Product", ProductSchema)
module.exports = Product
