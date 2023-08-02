// models/dataModel.js

const fs = require('fs');
const path = require('path');

const dataFilePath = path.join(__dirname, '../data.json');

// Function to read data from the JSON file
const readData = () => {
  const rawData = fs.readFileSync(dataFilePath, 'utf-8');
  return JSON.parse(rawData).data;
};

module.exports = {
  readData,
};
