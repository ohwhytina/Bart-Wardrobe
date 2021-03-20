const router = require('express').Router();
const sequelize = require('../config/connection');
const { User } = require('../models');
const withAuth = require('../utils/auth');
// axios 
const axios = require('axios');

// api calls


module.exports = router;