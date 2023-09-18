var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var Student = /** @class */ (function () {
    function Student(enrollment, name, examsGrades, assignmentsGrades) {
        this._examsGrades = Array();
        this._assignmentsGrades = Array();
        this._enrollment = enrollment;
        this._name = name;
        this.examsGrades = examsGrades;
        this.assignmentsGrades = assignmentsGrades;
    }
    Object.defineProperty(Student.prototype, "enrollment_1", {
        get: function () {
            return this._enrollment;
        },
        set: function (value) {
            this._enrollment = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Student.prototype, "name", {
        get: function () {
            return this._name;
        },
        set: function (value) {
            if (value.length < 3) {
                throw new Error('O nome deve conter no mínimo 3 caracteres.');
            }
            this._name = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Student.prototype, "examsGrades", {
        get: function () {
            return this._examsGrades;
        },
        set: function (value) {
            if (value.length !== 4) {
                throw new Error('A pessoa estudante só pode possuir 4 notas de provas.');
            }
            this._examsGrades = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Student.prototype, "assignmentsGrades", {
        get: function () {
            return this._assignmentsGrades;
        },
        set: function (value) {
            if (value.length !== 2) {
                throw new Error('A pessoa estudante só pode possuir 2 notas de trabalhos.');
            }
            this._assignmentsGrades = value;
        },
        enumerable: false,
        configurable: true
    });
    Student.prototype.sumGrades = function () {
        return __spreadArray(__spreadArray([], this.examsGrades, true), this.assignmentsGrades, true).reduce(function (acc, nota) {
            acc += nota;
            return nota;
        }, 0);
    };
    Student.prototype.averageGrades = function () {
        var sumGrades = this.sumGrades();
        var allGrades = this.examsGrades.length + this.assignmentsGrades.length;
        var result = sumGrades / allGrades;
        return result.toFixed(2);
    };
    return Student;
}());
var personOne = new Student('202001011', 'Fulano de Tal', [5, 6, 7, 8], [9, 10]);
// console.log(personOne);
console.log(personOne.sumGrades());
var personTwo = new Student('202001012', 'Outra Pessoa', [7, 8, 9, 10], [7, 8,]);
// console.log(personTwo);
console.log(personTwo.averageGrades());
