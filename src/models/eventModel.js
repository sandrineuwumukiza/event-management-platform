
import mongoose from "mongoose";

const eventSchema = new mongoose.Schema({
 title: { 
    type: String, 
    required: true 
},
dueDate: {
    startDate: {
        type: Date,
        required: true,
    },
    endDate: {
        type: Date,
        required: true,
    },
    startTime: {
        type: String,
        required: true,
    },
    endTime: {
        type: String,
        required: true,
    },
    duration: {
        type: Number,
        required: true,
    },
    durationType: {
        type: String,
        required: true,
        enum: {
            values: ["Minutes", "Hours", "Days", "Weeks", "Months"],
            message: "{VALUE} is not a valid duration type",
        },
    }
},
 location: { 
    type: String, 
    required: true 
},
 ticketAvailability: { 
    type: Number, 
    required: true 
},
 
});

const Event = mongoose.model('Event', eventSchema);

export default Event;
