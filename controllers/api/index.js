const router = require('express').Router();

const scheduleRoutes = require('./schedule-routes.js');
const weatherRoutes = require('./weather-routes');

router.use('/schedule', scheduleRoutes);
router.use('/weather', weatherRoutes);

module.exports = router;