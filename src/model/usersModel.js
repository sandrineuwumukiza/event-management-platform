
import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
 Firstname: { 
    type: String, 
    required: true 
},
Lastname: { 
    type: String, 
    required: true 
},
email:{
    type: String, 
    required: true
},
DateOfBirth: { 
    type: Date, 
    required: true 
},
gender: {
    type: String,
    enum: ['Male', 'Female', 'Prefer not to say'],
    required: true
 },
 address: { 
    type: String, 
    required: false 
},
 
});

const Users = mongoose.model('User', userSchema);

export default Users;
