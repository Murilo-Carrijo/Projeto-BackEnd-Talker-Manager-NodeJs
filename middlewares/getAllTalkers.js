const FILE_NAME = 'talker.json';

const fs = require('fs/promises');

const readerFile = async () => {
  let data = await fs.readFile(FILE_NAME, 'utf8');
  data = JSON.parse(data);
  return data;
};

const getAllTalkers = async (_req, res) => {
  const data = await readerFile();
  return res.status(200).json(data);
};

module.exports = {
    getAllTalkers,
    readerFile,
};
