// Acessando a chave medals (um objeto dentro de outro objeto):

player = {

  name: 'Marta',
  lastName: 'Silva',
  age: 34,
  medals: { golden: 2, silver: 3,
  },
  bestInTheWorld: [2006, 2007, 2008, 2009, 2010, 2018 ]
}

console.log('A jagadora possui ' + player.medals.golden + ' medalhas de ouro e ' + player.medals.silver + ' medalhas de prata.' );