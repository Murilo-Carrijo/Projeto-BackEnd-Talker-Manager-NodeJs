const validateEmail = (req, res, next) => {
  try {
    const { email } = req.body;
    const emailRegex = /\S+@\S+\.\S+/.exec(email);
    if (!email) {
      return res.status(400).json({ message: 'O campo "email" é obrigatório' });
    }
    if (!emailRegex) {
      return res.status(400).json({ message: 'O "email" deve ter o formato "email@email.com"' });
    }
    next();
  } catch (e) {
      console.log(e);
      next(e);
  }
};

const validatePassword = (req, res, next) => {
  try {
    const { password } = req.body;
    if (!password) {
      return res.status(400).json({ message: 'O campo "password" é obrigatório' });
    }
    if (password.length < 6) {
      return res.status(400).json({
          message: 'O "password" deve ter pelo menos 6 caracteres',
      });
    }
    next();
  } catch (e) {
      console.log(e);
      next(e);
  }
};

const validateToken = (req, res, next) => {
  try {
    const { authorization } = req.headers;
    if (!authorization) {
      return res.status(401).json({ message: 'Token não encontrado' });
    }
    if (authorization.length < 16) {
      return res.status(401).json({ message: 'Token inválido' });
    }
    next();
  } catch (e) {
      console.log(e);
      next(e);
  }
};

const validateName = (req, res, next) => {
  try {
    const { name } = req.body;
    if (!name) {
      return res.status(400).json({ message: 'O campo "name" é obrigatório' });
    }
    if (name.length < 3) {
      return res.status(400).json({ message: 'O "name" deve ter pelo menos 3 caracteres' });
    }
    next();
  } catch (e) {
      console.log(e);
      next(e);
  }
};

const validateAge = (req, res, next) => {
  try {
    const { age } = req.body;
    if (!age) {
      return res.status(400).json({ message: 'O campo "age" é obrigatório' });
    }
    if (age < 18) {
      return res.status(400).json({ message: 'A pessoa palestrante deve ser maior de idade' });
    }
    next();
  } catch (e) {
      console.log(e);
      next(e);
  }
};

const validateTalk = (req, res, next) => {
  try {
    const { talk } = req.body;
    if (!talk) {
      return res.status(400).json({ 
        message: 'O campo "talk" é obrigatório e "watchedAt" e "rate" não podem ser vazios',
    });
    }
    next();
  } catch (e) {
      console.log(e);
      next(e);
  }
};

const validateRate = (req, res, next) => {
  try {
    const { rate } = req.body.talk;
    if (rate === undefined) {
      return res.status(400).json({ 
        message: 'O campo "talk" é obrigatório e "watchedAt" e "rate" não podem ser vazios',
    });
    }
    if (rate < 1 || rate > 5) {
      return res.status(400).json({
        message: 'O campo "rate" deve ser um inteiro de 1 à 5',
      });
    }
    next();
  } catch (e) {
      console.log(e);
      next();
  }
};

const validateWatchedAt = (req, res, next) => {
  try {
    const { watchedAt } = req.body.talk;
    const watchedAtRegex = /^([0-2][0-9]|(3)[0-1])(\/)(((0)[0-9])|((1)[0-2]))(\/)\d{4}$/i
      .exec(watchedAt);
    if (!watchedAt) {
      return res.status(400).json({
        message: 'O campo "talk" é obrigatório e "watchedAt" e "rate" não podem ser vazios' });
    }
    if (!watchedAtRegex) {
      return res.status(400).json({
        message: 'O campo "watchedAt" deve ter o formato "dd/mm/aaaa"',
      });
    }
    next();
  } catch (e) {
      console.log(e);
      next(e);      
  }
};

module.exports = {
  validateEmail,
  validatePassword,
  validateToken,
  validateName,
  validateAge,
  validateTalk,
  validateRate,
  validateWatchedAt,
};
