const FILE_NAME = 'talker.json';

const { writeFile } = require('fs/promises');

const { readerFile } = require('./getAllTalkers');

const addTalker = async (req, res) => {
  const { name, age, talk } = req.body;
  const file = await readerFile();
  const newTalker = { name, age, id: (file.length), talk };
  file.push(newTalker);
  await writeFile(FILE_NAME, JSON.stringify(file));
  res.status(201).send(newTalker);
};

module.exports = {
  addTalker,
};
