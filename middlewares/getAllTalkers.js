const FILE_NAME = '../talker.json';

const fs = require('fs/promises');

const getAllTalkers = async (_req, res) => {
  let data = await fs.readFile(FILE_NAME, 'utf-8');
  data = JSON.parse(data);
  return res.status(200).json(data);
};

module.exports = {
    getAllTalkers,
};
