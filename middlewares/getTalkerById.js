const { readerFile } = require('./getAllTalkers');

const getAllTalkerById = async (req, res) => {
  const { id } = req.params;
  const data = await readerFile();
  const findTalker = data.find((talker) => talker.id === Number(id));
  if (findTalker) { return res.status(200).send(findTalker); }

  return res.status(404).send({ message: 'Pessoa palestrante não encontrada' });
};

module.exports = {
    getAllTalkerById,
};
