const mongoose = require('mongoose');
const bcrypt        = require('bcryptjs');
const Schema = mongoose.Schema;





//properties
const userSchema = new Schema({

name:{
    type: String,
    required: true,
    trim:true
},
password:{
    type: String,
    required: true,
    trim:true
},

Events : [{
    allDay : Boolean,
    startDate : String,
    endDate: String,
    title:String,
     }]

})

userSchema.pre('save', function(next){
var user = this;

    bcrypt.genSalt(10,function(err,salt){
        if(err){throw new Error(err);}

        bcrypt.hash(user.password,salt,function(err,hash){
             if(err){throw new Error(err);}
             user.password = hash;
             next();
        })
    })

})

userSchema.methods.verifyPassword = function(password){

    return bcrypt.compareSync(password,this.password)
}

const User = mongoose.model('User', userSchema)


module.exports = User;
