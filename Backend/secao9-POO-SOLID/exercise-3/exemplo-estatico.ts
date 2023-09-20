/*
Dicionário en-pt:
- static: estático
*/

class EmployeeExemplo {
  /* Atributo estático, que pertence a classe */
  private static employeeCount = 0
  
    /* Aqui temos o exemplo de um atributo comum que, em contraste com o atributo estático,
    é utilizado pelas instâncias e não pela classe */
    private employeeName: string;
  
    constructor(name: string) {
      /* Pelo fato do o método addEmployee() ser estático, ou seja, acessível 
      apenas a partir da própria classe e não de suas instâncias, é que a
      chamamos a partir de EmployeeExemplo e não do 'this' */
      EmployeeExemplo.addEmployee();
  
      // Nesse caso, o 'this' se refere à instância dessa classe, que está sendo construída
      this.employeeName = name;
    }
  
    // Esse é um método exclusivo da classe, por isso estático 
    private static addEmployee() {
      /* Nesse caso, como o atributo é estático, melhor forma de acessar
      o atributo é a partir do nome da classe.  */
      EmployeeExemplo.employeeCount += 1;
      console.log(`Total de pessoas funcionárias: ${EmployeeExemplo.employeeCount}`)
    }
  
    /* Aqui temos o exemplo de método comum que, em contraste com o método estático,
    é utilizado pelas instâncias e não pela classe */
    public getName(): string { 
      // Novamente, o 'this' se referindo à instância
      return this.employeeName
    }
  }
  
  const employee1 = new EmployeeExemplo('Kissyla'); // Total de pessoas funcionárias: 1
  const employee2 = new EmployeeExemplo('Calaça'); // Total de pessoas funcionárias: 2
  const employee3 = new EmployeeExemplo('Setinha'); // Total de pessoas funcionárias: 3
  