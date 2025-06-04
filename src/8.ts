

class ComplexNumber {
  real: number;
  imaginary: number;

  constructor(complexStr: string) {
    const parts = complexStr.slice(0, -1).split('+');
    this.real = parseInt(parts[0]);
    this.imaginary = parseInt(parts[1]);
  }

  multiply(other: ComplexNumber): ComplexNumber {
    const realPart = this.real * other.real - this.imaginary * other.imaginary;
    const imaginaryPart = this.real * other.imaginary + this.imaginary * other.real;
    return new ComplexNumber(realPart + "+" + imaginaryPart + "i");
  }

  toString(): string {
    return this.real + "+" + this.imaginary + "i";
  }
}

// Example usage
const num1 = new ComplexNumber("1+1i");
const num2 = new ComplexNumber("1+1i");
const result = num1.multiply(num2);

console.log(result.toString()); // Output: "0+2i"
