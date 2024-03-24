export class Customer {
  readonly id: number;
  // name: string = 'Guest'; // default value
  name: string;
  age?: number;

  constructor(id: number, name: string) {
    // hilangkan parameter name jika menggunakan default value
    console.log('Create new customer');
    this.id = id;
    this.name = name;
  }

  info(): string {
    return `id: ${this.id}, name: ${this.name}`;
  }

  sayHello(name: string): void {
    console.log(`Hello ${name}, my name is ${this.name}`);
  }
}

export class Order {
  constructor() {
    console.log('class order created');
  }
}

export class Category {
  #name?: string;

  get name(): string {
    if (this.#name) return this.#name;

    return 'has no name';
  }

  set name(value: string) {
    if (value !== '') {
      this.#name = value;
    }
  }
}

export class Employee {
  name: string;

  constructor(name: string) {
    this.name = name;
  }
}
export class Manager extends Employee {}
export class Director extends Manager {}
