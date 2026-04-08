

const mongoose = require('mongoose')
const Schema = mongoose.Schema


const studentSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    description:{
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
     variants: [
    {
      size: String,
      color: String,
      stock: Number
    }
  ],
    isDeleted:{
        type:Boolean,
        required: false
    }

},{
    timestamps: true,
    versionKey: false
})

const studentModle = mongoose.model('user',studentSchema)
module.exports = studentModle