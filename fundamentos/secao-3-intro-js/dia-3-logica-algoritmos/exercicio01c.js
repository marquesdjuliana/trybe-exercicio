let array = ['java', 'javascript', 'python', 'html', 'css'];
let palavraMaior = array[0];
let palavraMenor = array[0];


for (let index = 0; index < array.length; index += 1) {
  if (array[index].length > palavraMaior.length) {
    palavraMaior = array[index];
  }
}

for (let index = 0; index < array.length; index += 1) {
  if (array[index].length < palavraMenor.length) {
    palavraMenor = array[index];
  }
}

console.log(palavraMenor);
console.log(palavraMaior);