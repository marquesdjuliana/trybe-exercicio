const app = require('./app');

const PORT = 3100;

app.listen(PORT, () => {
  console.log(`API TrybeCash está sendo executada na porta ${PORT}`);
});