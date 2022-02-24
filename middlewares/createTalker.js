const { writeFile } = require('fs/promises');
const { readerFile } = require('./getAllTalkers');

const FILE_NAME = 'talker.json';

const createTalker = async (req, res, next) => {
  try {
    const { name, age, talk } = req.body;
    const file = await readerFile();
    const newTalker = { name, age, id: (file.length + 1), talk };
    file.push(newTalker);
    await writeFile(FILE_NAME, JSON.stringify(file));
    return res.status(201).json(newTalker);
  } catch (e) {
    console.log(e);
    next(e);
  }
};

module.exports = {
  createTalker,
};