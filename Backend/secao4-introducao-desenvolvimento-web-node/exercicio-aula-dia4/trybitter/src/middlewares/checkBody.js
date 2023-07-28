// Middleware : 
// ATENÇÃO sempre que precisar de mais de uma resposta em uma função (como o exemplo do erro 401) lembrar de colocar return (senão dará o aviso de MUITAS respostas); e assim eu paro a continuação da função logo na primeira msg!
// const checkBody = (req, res, next) => {
//   const { author, description, title } = req.body;

//   if (!author || author.length < 5) {
//     return res.status(401).json({ message: 'Autor inválido' });
//   }

//   if (!title || title.length < 5) {
//    return res.status(401).json({ message: 'Título inválido' });
//   }

//   if (!description || description.length < 5) {
//     return res.status(401).json({ message: 'Descrição inválida' });
//   }
//   next();
// };

const checkBody = (req, res, next) => {
  const properties = ['author', 'title', 'description'];

  const everyPropertyExists = properties.every((prop) => prop in req.body);
  if (!everyPropertyExists) {
    return res.status(401).json({ message: 'Alguma prop está faltando.' });
  }
  const everyProperyHasMinLength = properties.every((prop) => {
    const value = req.body[prop];
    return value.length > 5;
  });

  if (!everyProperyHasMinLength) {
    return res.status(401).json({ message: 'Alguma prop tem menos de 5 caracteres.' });
  }
  next();
};

module.exports = checkBody;