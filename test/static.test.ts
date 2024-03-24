describe('Static Properties', () => {
  class Configuration {
    static NAME: string = 'Belajar ts';
    static VERSION: number = 1.0;
    static AUTHOR: string = 'Dhimas';
  }

  class MathUtils {
    static add(val1: number, val2: number): number {
      return val1 + val2;
    }
  }

  it('should support static properties', () => {
    console.log(Configuration.NAME);
    console.log(Configuration.VERSION);
    console.log(Configuration.AUTHOR);
  });
  
  it('should support static method', () => {
    expect(MathUtils.add(1, 2)).toBe(3);
  });
});
