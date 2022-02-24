const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

const HTTP_OK_STATUS = 200;
const PORT = '3000';

// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (_request, response) => {
  response.status(HTTP_OK_STATUS).send();
});

app.listen(PORT, () => {
  console.log('Online');
});

const { getAllTalkers } = require('./middlewares/getAllTalkers');

const { getAllTalkerById } = require('./middlewares/getTalkerById');

const { login } = require('./middlewares/login');

const { createTalker } = require('./middlewares/createTalker');

const { editTalker } = require('./middlewares/editTalker');

const { deleteTalker } = require('./middlewares/deleteTalker');

const {
  validateEmail,
  validatePassword,
  validateToken,
  validateName,
  validateAge,
  validateTalk,
  validateRate,
  validateWatchedAt,
} = require('./middlewares/validations');

app.get(
  '/talker',
  getAllTalkers,
);

app.get(
  '/talker/:id',
  getAllTalkerById,
);

app.post(
  '/login',
  validateEmail,
  validatePassword,
  login,
);

app.post(
  '/talker',
  validateToken,
  validateName,
  validateAge,
  validateTalk,
  validateRate,
  validateWatchedAt,
  createTalker,
);

app.put(
  '/talker/:id',
  validateToken,
  validateName,
  validateAge,
  validateTalk,
  validateRate,
  validateWatchedAt,
  editTalker,
);

app.delete(
  '/talker/:id',
  validateToken,
  deleteTalker,
);
