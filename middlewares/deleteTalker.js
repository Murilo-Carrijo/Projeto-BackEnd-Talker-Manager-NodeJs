const FILE_NAME = 'talker.json';

const { writeFile } = require('fs/promises');

const { readerFile } = require('./getAllTalkers');

const deleteTalker = async (req, res) => {
  const { id } = req.params;
  const file = await readerFile();
  const talkerId = file.findIndex((talker) => talker.id === Number(id));
  if (talkerId === -1) return res.status(404).json({ message: 'palestrante não encontrado' });

  file.splice(talkerId, 1);

  await writeFile(FILE_NAME, JSON.stringify(file, null, 2));
  return res.status(204).end();
};

module.exports = {
  deleteTalker,
};