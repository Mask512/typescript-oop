describe('Abstract class', () => {
  /** Abstract class merupakan deklarasi class yang belum selesai
        Tidak boleh / bisa dibuat menjadi object menggunakan kata kunci new
        hanya digunakan sebagai parent class untuk diturunkan ke child class nya
     */

  abstract class Customer {
    // abstract class
    readonly id: number;
    abstract name: string; // properties abstract

    constructor(id: number) {
      this.id = id;
    }

    abstract sayHello(name: string): void;
  }
  it('should', () => {
    class RegularCustomer extends Customer {
      name: string; // abstract properties harus di deklarasikan ulang

      constructor(id: number, name: string) {
        super(id);
        this.name = name;
      }

      sayHello(name: string): void {
        console.log('Hello ' + name);
      }
    }

    // const customer = new Customer(); // tidak bisa membuat langsung class dari abstract class

    const customer = new RegularCustomer(1, 'Dimas');
  });
});
