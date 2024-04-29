import mongoose from 'mongoose';
import bcryptjs from 'bcryptjs';

const userSchema = new mongoose.Schema({
 name: { 
    type: String, 
    required: true
    
 },
 email: { 
    type: String, 
    required: true, 
    unique: true,
    lowercase: true,
},
 password: { 
    type: String, 
    required: true,
    minLength: 6 
},
});

// fire function

// userSchema.pre('save', async function(){
// const salt = await bcryptjs.genSalt();
// this.password = await bcryptjs.hash(this.password, salt)
// next();
// })

const User = mongoose.model('User', userSchema);


export default User;
