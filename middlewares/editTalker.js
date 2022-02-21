const FILE_NAME = 'talker.json';

const { writeFile } = require('fs/promises');

const { readerFile } = require('./getAllTalkers');

const editTalker = async (req, res) => {
  const { id } = req.params;
  const { name, age, talk } = req.body;
  const file = await readerFile();
  const talkerId = file.findIndex((talker) => talker.id === Number(id));
  if (talkerId === -1) return res.status(404).json({ message: 'palestrante não encontrado' });
  const setTalker = { name, age, id: Number(id), talk };

  file.splice(talkerId, 1, setTalker);

  await writeFile(FILE_NAME, JSON.stringify(file, null, 2));
  return res.status(200).json(setTalker);
};

module.exports = {
  editTalker,
};