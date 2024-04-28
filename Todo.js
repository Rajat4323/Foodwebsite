const mongoose = require("mongoose");
const todoSchema = new mongoose.Schema(
    {
        name:{
            type:String,
            required:true,
            maxLength:50,
        },
      age: {
        type:String,
        required:true,
        maxLength:50,
      },
      email: {
        type:String,
        required:true,
        maxLength:50,
      },
      createdAt:{
        type:Date,
        required:true,
     default:Date.now(),
      },
      updatedAt:{
        type:Date,
        required:true,
       default:Date.now(),
      }
    }
);
module.exports = mongoose.model("Todo", todoSchema);