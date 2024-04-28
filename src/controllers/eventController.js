import Event from "../models/eventModel.js";

// Create a new event

export const createEvent = async (req, res) => {
 try {
    const event = await Event.create(req.body);
    res.status(201).json({ 
        message: 'Event created successfully', 
        event 
    });
 } catch (error) {
    res.status(500).json({ 
        message: 'Internal Server Error', 
        error 
    });
 }
};

// Get the list of all available events

export const getAllEvents = async (req, res) => {
 try {
    const events = await Event.find({});
    res.status(200).json({ events });
 } catch (error) {
    res.status(500).json({ 
        message: 'Error fetching events', 
        error 
    });
 }
};

// search for the cetain event by event ID
export const getEventById = async (req, res) => {
 try {
    const event = await Event.findById(req.params.id);
    if (!event) {
      return res.status(404).json({ 
        message: 'Event not found' 
    });
    }
    res.status(200).json({ event });
 } catch (error) {
    res.status(500).json({ 
        message: 'Error fetching event', 
        error 
    });
 }
};

// Update an event by ID

export const updateEvent = async (req, res) => {
 try {
    const event = await Event.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!event) {
      return res.status(404).json({ 
        message: 'Event not found' 
    });
    }
    res.status(200).json({ 
        message: 'Event updated successfully', 
        event 
    });
 } catch (error) {
    res.status(500).json({ 
        message: 'Server error', 
        error 
    });
 }
};

// Delete an event by ID
export const deleteEvent = async (req, res) => {
 try {
    const event = await Event.findByIdAndDelete(req.params.id);
    if (!event) {
      return res.status(404).json({ 
        message: 'Event not found' 
    });
    }
    res.status(200).json({ 
        message: 'Event deleted successfully' 
    });
 } catch (error) {
    res.status(500).json({ 
        message: 'Error deleting event', 
        error 
    });
 }
};
