const express = require('express');
require('express-async-errors');

const routers = require('./routers'); // const postsRouter = require('./routers/posts.router'); //opção de import direto sem index.js

const app = express();
app.use(express.json()); // express.json é middleware que intercepta todas as requisições - por isso é usado logo no início - pega o corpo da requisição (se houver) faz o parse e joga no req.body
app.use(routers); // app.use('/posts', postsRouter); // opção sem index.js. e utilizando uma rota específica - para isso é necessário colocar o caminho relativo no postsRouter

// Testando rota direto no App:
app.get('/', (_req, res) => res.send('Hello!'));

app.use((error, _req, res, _next) => res.status(500).json({ error: 'Erro inesperado!' }));
module.exports = app;