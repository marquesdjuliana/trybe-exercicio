export class Animal {
  constructor(public name: string) { }
  move() { console.log(`${this.name} está se movendo.`); }
}
export class Bird extends Animal {
  move() { console.log(`${this.name} está voando.`); }
}
export class Mammal extends Animal {
  move() { console.log(`${this.name} está andando.`); }
}

