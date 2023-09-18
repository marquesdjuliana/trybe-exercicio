
class Student {
  private _enrollment: string;
  private _name: string;
  private _examsGrades: number[] = Array();
  private _assignmentsGrades: number[]= Array();

  constructor(enrollment: string, name: string, examsGrades: number[], assignmentsGrades: number[]) {
    this._enrollment = enrollment;
    this._name = name;
    this.examsGrades = examsGrades;
    this.assignmentsGrades = assignmentsGrades;
  }
  public get enrollment_1(): string {
    return this._enrollment;
  }
  public set enrollment_1(value: string) {
    this._enrollment = value;
  }

  get name(): string {
    return this._name;
  }

  set name(value: string) {
    if (value.length < 3) {
      throw new Error('O nome deve conter no mínimo 3 caracteres.');
    }

    this._name = value;
  }

  get examsGrades(): number[] {
    return this._examsGrades;
  }

  set examsGrades(value: number[]) {
    if (value.length !== 4) {
      throw new Error('A pessoa estudante só pode possuir 4 notas de provas.');
    }

    this._examsGrades = value;
  }

  get assignmentsGrades(): number[] {
    return this._assignmentsGrades;
  }

  set assignmentsGrades(value: number[]) {
    if (value.length !== 2) {
      throw new Error(
        'A pessoa estudante só pode possuir 2 notas de trabalhos.',
      );
    }

    this._assignmentsGrades = value;
  }
  sumGrades(): number {
    return [...this.examsGrades, ...this.assignmentsGrades]
    .reduce((acc, nota) => {
      acc += nota;
      return nota;
    }, 0)
  }

  averageGrades(): string {
    const sumGrades = this.sumGrades();
    const allGrades = this.examsGrades.length + this.assignmentsGrades.length;
    const result = sumGrades/ allGrades;
    return result.toFixed(2);
  }
}
const personOne = new Student('202001011', 'Fulano de Tal', [5, 6, 7, 8], [9, 10]);

// console.log(personOne);
console.log(personOne.sumGrades());


const personTwo = new Student('202001012', 'Outra Pessoa', [7, 8, 9, 10], [7, 8,]);

// console.log(personTwo);
console.log(personTwo.averageGrades());
