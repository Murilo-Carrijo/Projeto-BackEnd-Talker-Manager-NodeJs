const FILE_NAME = 'talker.json';

const fs = require('fs/promises');

const getAllTalkerById = async (req, res) => {
  const { id } = req.params;
  console.log(id);
  let data = await fs.readFile(FILE_NAME, 'utf-8');
  data = JSON.parse(data);
  const findTalker = data.find((talker) => talker.id === Number(id));
  if (findTalker) { return res.status(200).send(findTalker); }

  return res.status(404).send({ message: 'Pessoa palestrante não encontrada' });
};

module.exports = {
    getAllTalkerById,
};
