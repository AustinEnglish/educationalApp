const mongoose = require('mongoose');

const Schema = mongoose.Schema;

//properties
const userSchema = new Schema({

name:{
    type: String,
    required: true,
    trim:true
},
username:{
    type: String,
    required: true,
    trim:true
},
email:{
    type: String,
    required: true,
    trim:true
},
phone:{
    type: String,
    required: true,
    trim:true
},
password:{
    type: String,
    required: true,
    trim:true
},
website:{
    type: String,
    required: true,
    trim:true
}

})

const User = mongoose.model('User', userSchema)


module.exports = User;
