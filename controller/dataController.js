// controllers/dataController.js

const dataModel = require('../model/dataModel');

// Controller function to get all data
const getAllData = (req, res) => {
  const data = dataModel.readData();
  res.json(data);
};

module.exports = {
  getAllData,
};
