describe('Polymorphism', () => {
  /** Ketika sebuah class berubah bentuk */

  class Employee {
    constructor(public name: string) {}
  }
  class Manager extends Employee {}
  class VicePresident extends Manager {}
  function sayHello(employee: Employee): void {
    console.log(`Hello ${employee.name}`);
  }
  class OtherEmployee {
    constructor(public name: string) {}
  }

  it('should', () => {
    let employee: Employee = new Employee('Budi');
    console.log(employee);

    employee = new Manager('Budi');
    console.log(employee);
    employee = new VicePresident('Budi');
    console.log(employee);
  });

  it('should support method parameter polymorphism', () => {
    // mengirim data kepada seluruh turunan class

    sayHello(new Employee('Heru'));
    sayHello(new Manager('Eko'));
    sayHello(new Manager('Joko'));
    sayHello(new OtherEmployee('Joko'));
  });
});
