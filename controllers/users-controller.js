
const User = require('./../models/users');
const{users} = require('./../data/users')

const seedDB = (req,res)=>{
User.create(users)
.then(users=>res.status(200).send({data:users}))
.catch(err=>res.status(500).send({error:err.message}))
}


const login = (req, res) => {
    const {username, password} = req.body;
    res.send({success: true, messages: "Login Sucessful", data: username})

}

// const index = (req, res) => {
//     User.find().exec((err,users)=>{
//         if(err) {res.status(500).send({sucess: false,message:"Error w/db", error:err.message})}
//         else if(users.length === 0) {res.status(200).send({sucess: true, message:"No users Found"})}
//         else{res.status(200).send({sucess: true,data: users})}
//     })

// }

// const getById = (req, res) => {
//     User.findById(req.params.id).exec((err,user)=>{
//         if(err) {res.status(500).send({sucess: false,message:"Error w/db", error:err.message})}
//         else if(!user) {res.status(200).send({sucess: true, message:"No user Found"})}
//         else{res.status(200).send({sucess: true,data: user})}
//     })
    
// }

// const create = (req, res) => {
//     const user = {... req.body}
//     User.create(user).then(user=>res.status(200).send({success:true, data:user}))
//     .catch(err=> res.status(200).send({success: false, message: "dataBase error", error: err.message}))
// }


// const update = (req, res) => {
//     User.findByIdAndUpdate(req.params.id,{$set:req.body},{new:true},(err,user)=>{
//          if(err) {res.status(500).send({sucess: false,message:"Error w/db", error:err.message})}
//          else{res.status(200).send({sucess: true,data: user})}

//     })
// }

// const destroy = (req, res) => {
//     User.findByIdAndRemove(req.params.id,(err,user)=>{
//          if(err) {res.status(500).send({sucess: false,message:"Error w/db", error:err.message})}
//          else if(!user) {res.status(200).send({sucess: true, message:"No user Found"})}
//          else{res.status(200).send({sucess: true,data: user})}

//     })

// }


module.exports = {  seedDB,login }