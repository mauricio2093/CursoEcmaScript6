class calculadora {                          // se crea la clase
    constructor(){                          // se genera un constructor
        this.valueA = 0;                   // se evaluan la variables con this
        this.valueB = 4;
    }
    sum(valueA,valueB){                      // se crea la funcion a evaluar
        this.valueA = valueA;
        this.valueB = valueB;
        return this.valueA + this.valueB;       // se retrona la suma
    }
}
const calc = new calculadora();                 // se crea un objeto para llamar la clase
console.log(calc.sum(2,2));                     // se llama a la funcion suma
type="module"


