import {
  Customer,
  Order,
  Category,
  Employee,
  Manager,
  Director,
} from '../src/Classes';

describe('class', () => {
  it('should can create class', () => {
    const customer: Customer = new Customer(1, 'Dhimas');
    const order: Order = new Order();
  });

  it('should can create constructor', () => {
    new Order();
  });

  it('should can return info customer', () => {
    const customer: Customer = new Customer(1, 'Dhimas');

    expect(customer.age).toBe(undefined);

    customer.age = 32;

    expect(customer.id).toBe(1);
    // customer.id = 2;  //error readonly

    expect(customer.name).toBe('Dhimas');

    customer.name = 'DSP';

    expect(customer.name).toBe('DSP');
    expect(customer.age).toBe(32);
    expect(customer.info()).toBe('id: 1, name: DSP');

    customer.sayHello('Eko');
  });

  it('should have getter and setter', () => {
    const category: Category = new Category();

    console.log(category.name);

    category.name = 'Food';

    console.log(category.name);
    category.name = '';

    console.log(category.name);
    // console.log(category.#name);  // error private
  });

  it('should suppport inheritance', () => {
    const employee = new Employee('dhimas');
    const manager = new Manager('sahid');
    const director = new Director('pangestu');
    console.log(employee.name);
    console.log(manager.name);
    console.log(director.name);
  });

  it('should suppport interface inheritance', () => {
    interface HasName {
      name: string;
    }
    interface CanSayHello {
      sayHello(name: string): void;
    }

    /** implements berarti class Person mempunyai kontrak dengan HasName dan CanSayHello */

    class Person implements HasName, CanSayHello {
      name: string; // HasName

      constructor(name: string) {
        this.name = name;
      }

      sayHello(name: string): void {
        // CanSayHello
        console.log(`Hello ${name}, my name is ${this.name}`);
      }
    }

    const user = new Person('Dhimas');

    user.sayHello('Eko');
  });

  it('should support super constructor', () => {
    class Person {
      name: string;

      constructor(name: string) {
        this.name = name;
      }
    }

    class Employee extends Person {
      department: string;

      constructor(name: string, department: string) {
        super(name);
        this.department = department;
      }

      info() {
        console.log(
          `my name is ${this.name}, my department is in ${this.department}`,
        );
      }
    }

    const employee = new Employee('Eko', 'HRD');

    employee.info();
  });

  it('should support method overiding', () => {
    class Employee {
      name;

      constructor(name: string) {
        this.name = name;
      }

      sayHello(name?: string) {
        console.log(`my name is ${this.name}`);
      }
    }

    class Manager extends Employee {
      sayHello(name: string): void {
        console.log(`Hello ${name} , my name is ${this.name}, I am a manager`);
      }
    }

    const employee = new Employee('emplo');
    const manager = new Manager('dhimas');

    employee.sayHello();
    manager.sayHello('Eko');
  });

  it('should support super method', () => {
    class Employee {
      name;

      constructor(name: string) {
        this.name = name;
      }

      sayHello(name?: string) {
        console.log(`my name is ${this.name}`);
      }
    }

    class Manager extends Employee {
      sayHello(name: string): void {
        super.sayHello(name);

        console.log('Hello ' + name);
        console.log('I am your manager');
      }
    }

    const employee = new Employee('emplo');
    const manager = new Manager('dhimas');

    employee.sayHello();
    manager.sayHello('Eko');
  });

  // visibility
  it('should support private property', () => {
    class Counter {
      private counter: number = 0; // cannot accessible public , hanya bisa diakses oleh class itu sendiri

      public increment(): void {
        // diakses dari dalam class
        this.counter++;
      }

      get getCounter() {
        return this.counter;
      }
    }

    const counter = new Counter();

    // counter.counter++; // cannot accessible public

    console.log(counter.getCounter);
    counter.increment();
    console.log(counter.getCounter);
  });

  it('should support Protected', () => {
    class Counter {
      protected counter: number = 0; // dapat diakses oleh class itu dan turunannya

      public increment(): void {
        // diakses dari dalam class
        this.counter++;
      }

      get getCounter() {
        return this.counter;
      }
    }

    class DoubleCounter extends Counter {
      public increment(): void {
        this.counter += 2;
      }
    }

    const doubleCounter = new DoubleCounter();

    console.log(doubleCounter.getCounter);
    doubleCounter.increment();
    console.log(doubleCounter.getCounter);
  });

  it('should support parameter properties', () => {
    class Person {
      // name: string; // tidak perlu deklarasi disini

      constructor(public name: string) {} // harus menyertakan visibility : public
    }

    const person = new Person('Dhimas');
    console.log(person.name);
    person.name = 'Eko';
    console.log(person.name);
  });
});
