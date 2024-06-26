const mongoose = require('mongoose');
const userSchema = mongoose.Schema({
  username: { type:String,required:true, unique: true },
  email: { type:String,required:true , unique: true },
  password: { type:String,required:true,min:5},
  role: { type: String, required: true },
 
},{
    versionKey:false,
    timestamps:true
});

const UserModel = mongoose.model('User', userSchema);
module.exports = {UserModel};
