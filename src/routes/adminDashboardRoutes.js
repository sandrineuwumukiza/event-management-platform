import express from 'express';
const dashBoardRouter = express.Router();

dashBoardRouter.get('/api/admin/events', (req, res) => {
    eventsCollection.find().toArray(function(err, result) {
      if (err) throw err;
      res.send(result);
    });
  });

  // Endpoint to get all bookings
  dashBoardRouter.get('/api/admin/bookings', (req, res) => {
    bookingsCollection.find().toArray(function(err, result) {
      if (err) throw err;
      res.send(result);
    });
  });

  export default dashBoardRouter