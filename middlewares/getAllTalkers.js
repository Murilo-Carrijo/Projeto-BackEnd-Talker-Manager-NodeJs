const FILE_NAME = 'talker.json';

const fs = require('fs');

const getAllTalkers = (_req, res) => {
  let data = fs.readFile(FILE_NAME, 'utf8');
  data = JSON.parse(data);
  return res.status(200).json(data);
};

module.exports = {
    getAllTalkers,
};
