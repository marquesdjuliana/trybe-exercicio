// import { Person } from './Person';
// import { Student } from './Student';
// import{ Employee }from './Employee';
import { Subject } from './Subject';
import { Teacher } from './Teacher';
// const maria = new Person('Maria da Consolação', new Date('1980/01/25'));
// const luiza = new Person('Luiza de Andrade', new Date('2005/10/02'));
// console.log(maria);
// console.log(luiza);


// const carolina = new Student('Carolina da Silva', new Date('2005/03/17'));
// carolina.examsGrades = [25, 20, 25, 23];
// console.log(carolina);

// const jessica = new Student('Jéssica Bianca Nunes', new Date('2004/06/06'));
// jessica.assignmentsGrades = [50, 45];
// console.log(jessica);


// const testInterfaceEmployee: Employee = {
//   registration: 'FNC1234567891011',
//   salary: 1200.00,
//   admissionDate: new Date(),

//   generateRegistration(): string {
//     const randomStr = String(Date.now() * (Math.random() + 1)).replace(/\W/g, '');

//     return `FNC${randomStr}`;
//   },
// };

// console.log(testInterfaceEmployee);


const math = new Subject('Matemática');
console.log(math);

const marta = new Teacher('Marta da Silva', new Date('1980/03/30'), 2000, math);
console.log(marta);