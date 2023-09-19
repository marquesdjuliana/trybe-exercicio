export class Person {
  private _name: string;
  private _bithDate: Date;

  constructor(n: string, bD: Date) {
    this._name = n;
    this._bithDate = bD;
    this.validatePerson();
  }

  public get name(): string {
    return this._name;
  }

  set name(value: string) {
    this._name = value;
  }

  public get bithDate(): Date {
    return this._bithDate;
  }

  set bithDate(value: Date) {
    // Verificar se a data de nascimento é uma data no futuro
    if (value > new Date()) {
      throw new Error('A data de nascimento não pode ser uma data no futuro.');
    }

    // Calcular a idade da pessoa
    const today = new Date();
    const age = today.getFullYear() - value.getFullYear();

    // Verificar se a pessoa tem mais de 120 anos
    if (age > 120) {
      throw new Error('A pessoa não pode ter mais de 120 anos.');
    }

    this._bithDate = value;

  }

  
  private validateName(name: string): void {
    if (name.length < 3) {
      throw new Error('O nome deve conter no mínimo 3 caracteres.');
    }
  }
  
  private validateBithDate(data: Date): void {
     if (data > new Date()) {
      throw new Error('A data de nascimento não pode ser uma data no futuro.');
    }

    const today = new Date();
    const age = today.getFullYear() - data.getFullYear();

    if (age > 120) {
      throw new Error('A pessoa não pode ter mais de 120 anos.');
    }
  }

  private validatePerson(): void {
    this.validateBithDate(this.bithDate);
    this.validateName(this.name);
  } 
}
