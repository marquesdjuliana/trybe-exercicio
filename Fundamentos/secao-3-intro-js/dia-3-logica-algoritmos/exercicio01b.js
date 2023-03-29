
let word = 'tryber';
let newWord = ' ';

for ( let index = 0; index < word.length; index += 1) {
  newWord += word[word.length-1 - index]
}
console.log(newWord);
