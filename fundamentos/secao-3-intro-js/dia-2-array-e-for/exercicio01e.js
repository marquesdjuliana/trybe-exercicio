let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let mNumbers = 0;

for ( index = 0; index < numbers.length; index += 1 ) {
    if (numbers[index] > mNumbers) {
        mNumbers = numbers[index];
    }
}
console.log(mNumbers);