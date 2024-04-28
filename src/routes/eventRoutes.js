

import express from 'express';
import { setTime } from '../middleware/time.js';
import { createEvent, getAllEvents, getEventById, updateEvent,deleteEvent } from '../controllers/eventController.js';

const eventRouter = express.Router();

eventRouter.post('/create', setTime, createEvent);
eventRouter.get('/eventList', getAllEvents);
eventRouter.get('/id/:id', getEventById);
eventRouter.put('/id/:id', updateEvent);
eventRouter.delete('/id/:id', deleteEvent);

export default eventRouter;
