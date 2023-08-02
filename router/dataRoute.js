// src/routes/roomRoutes.js

const express = require('express');
const dataController = require('../controller/dataController');

const router = express.Router();


router.get('/', dataController.getAllData);


module.exports = router;
