/*======  
ES10

-Array.prototype.flat(nivel_de_profundidad): 
un nuevo método que nos permite aplanar arreglos.

-Array.prototype.flatMap() 
lo mismo que flat con el beneficio de que primero manipular la data para luego poder aplanar.

-String.prototype.trimStart() | String.prototype.trimEnd() 
permite quitar los espacios al inicio o al final dependiendo de la funciona.

-try/catch: 
ahora puedes utilizarlo sin necesidad de especificaro como catch(error) sino directamente usarlo en el scope del catch.

-Object.fromEntries() lo inverso a Object.entries(), 
es decir podemos convertir un objeto en una matriz clave/valor con Object.entries(), 
y hace lo inverso es decir de una matriz clave/valor a un objeto con Object.fromEntries().
object.fromEntries()Esta expresión retorna un objeto partiendo de los valores de un array, mientras que object.entries() es lo contrario.

-Symbol.prototype.description: permite regresar el descripcion opcional del Symbol
https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Symbol/description

======*/

let array = [1,2,3,4,[1,2,3,[1,2,3]]];

console.log(array.flat(2));      //metodo flat devuelve una matriz con cualquier submatriz aplanada

let array1 =[1,2,3,4,5];

console.log(array1.flatMap(value => [value, value*2]));  // este metodo mapea cada uno de los elementos y opera sobre ellos

// eliminar espacion en string

let hello = '       hello world';
console.log(hello);
console.log(hello.trimStart());    // elimina espacio al empezar

let hello1 = 'hello world     ';
console.log(hello1);
console.log(hello1.trimEnd()); // elimina espacio al finalizar

// try catch
try{

}catch{
    error
}

// clave valor a objetos
let entries = [["name","mauricio"],["age",32]];
console.log(Object.fromEntries(entries));        // devuelve un obj con clave valor

let mySymbol = `My Symbol`;
let symbol = Symbol(mySymbol);
console.log(symbol.description);