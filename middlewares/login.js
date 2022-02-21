const FILE_NAME = 'talker.json';
const { writeFile } = require('fs/promises');

const crypto = require('crypto');
const { readerFile } = require('./getAllTalkers');

const login = async (_req, res) => {
  const token = crypto.randomBytes(8).toString('hex');
  let tokens = await readerFile();
  if ((tokens).length > 0) {
    tokens.push(token);
  } else {
    tokens = [token];
  }
  await writeFile(FILE_NAME, JSON.stringify(tokens));
  return res.status(200).json({ token });
};

const checkEmailExist = (req, res, next) => {
  const { email } = req.body;
  if (!email) {
    return res.status(400).json({ message: 'O campo "email" é obrigatório' });
  }
  next();
};

const validationEmail = (req, res, next) => {
  const { email } = req.body;
  const emailRegex = /\S+@\S+\.\S+/;
  const checkEmail = emailRegex.test(email);
  if (!checkEmail) {
    return res.status(400).json({ message: 'O "email" deve ter o formato "email@email.com"' });
  }
  next();
};

const checkPasswordExist = (req, res, next) => {
  const { password } = req.body;
  if (!password) {
    return res.status(400).json({ message: 'O campo "password" é obrigatório' });
  }
  next();
};

const validationPassword = (req, res, next) => {
  const { password } = req.body;
  if (password.length < 6) {
    return res.status(400).json({ message: 'O "password" deve ter pelo menos 6 caracteres' });
  }
  next();
};
  
module.exports = {
  login,
  checkEmailExist,
  validationEmail,
  checkPasswordExist,
  validationPassword,
};
