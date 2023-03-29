// Imprima no console a mensagem " Olá xxxxx" para cada nome substituindo xxxxx pelo nome em questão:

let names = {
  person1: 'João',
  person2: 'Maria',
  person3: 'Jorge',
};

for ( let key in names) {
  console.log('Olá ' + names[key])
}