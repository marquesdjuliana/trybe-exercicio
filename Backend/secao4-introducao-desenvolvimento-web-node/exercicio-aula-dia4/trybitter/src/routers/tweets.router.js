const express = require('express');
const checkBody = require('../middlewares/checkBody');
const { salveTweet } = require('../utils/trybittter');

const tweetsRouter = express.Router();

// Exemplo com o caminho de rota relativo (caso fosse usado o caminho da rota no 'use'):
// tweetsRouter.post('/', (_req, res) => {
//   res.send('POST funcionando!');
// });

// Testando 
tweetsRouter.get('/tweets', (_req, res) => res.send('GET funcionando!'));

tweetsRouter.post('/tweets', checkBody, async (req, res) => {
  const { author, title, description } = req.body;
 const createdTweet = await salveTweet({ author, title, description });
  res.status(201).json(createdTweet);
});

module.exports = tweetsRouter;