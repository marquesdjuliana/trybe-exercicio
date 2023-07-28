const express = require('express');
const crypto = require('crypto');
let users = require('./data'); // importando entidade

const app = express();
app.use(express.json());

// leitura
app.get('/', (_request, response) => {
  console.log('Alguém fez uma requisção');
  response.status(200).send('<h1>Respondendo!!</h1>'); // a função send pode ser usada em muitos formatos: objetos, strings ...
});

app.get('/users', (_req, res) => {
  // const users = [
  //   { name: 'Ronaldo', cohort: 'CH30' },
  //   { name: 'Juliana', cohort: 'CH30' },
  // ]; 
  res.json(users); // usando users importado de outro arquivo
});

// criação de novos usuários
app.post('/users', (req, res) => {
  // users.push({
  //   name,
  //   cohort,
  // });
  // res.status(201).end(); // autoexplicativo, sem texto; 201, criado com sucesso!
  const { name, cohort } = req.body;
  if (!name) return res.status(400).json({ message: 'Faltando o nome:/' });
  if (typeof name !== 'string') return res.status(400).json({ message: 'O nome deve ser letras' });
  if (!cohort) return res.status(400).json({ message: 'Faltando o cohort:/' });

  const user = {
    id: crypto.randomUUID(),
    name, 
    cohort,
  };
  users.push(user);
  res.status(201).json(user);
});

// remoção
app.delete('/users/:id', (req, res) => {
  const { id } = req.params;
  const found = users.find((user) => user.id === id);
  if (!found) return res.status(404).end();

 users = users.filter((user) => user.id !== id);
 res.status(204).end();
});

// atualização completa: PUT
app.put('/users/:id', (req, res) => {
  const { id } = req.params;
  const { name, cohort } = req.body;
  
  const found = users.find((user) => user.id === id);
  if (!found) return res.status(404).end();

  users = users.map((user) => {
    if (user.id === id) {
      return {
        ...user, 
        name, 
        cohort,
      };
    }
    return user; 
  });

  res.status(204).end();
});
// atualização parcial: PATCH
app.patch('/users/:id/name', (req, res) => {
  const { id } = req.params;
  const { name } = req.body;
  if (!name) return res.status(400).json({ message: 'Faltando o nome:/' });
  if (typeof name !== 'string') return res.status(400).json({ message: 'O nome deve ser letras' });

  const found = users.find((user) => user.id === id);
  if (!found) return res.status(404).end();

  users = users.map((user) => {
    if (user.id === id) {
      return {
        ...user, 
        name, 
      };
    }
    return user; 
  });

  res.status(204).end();
});

app.listen(3000, () => {
  console.log('Comecei a rodar na porta 3000');
});
