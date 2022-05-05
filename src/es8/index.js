const data = {
    frontend : 'Mauricio',
    backend : 'Isabel',
    design : 'Ana',
};

const entries = Object.entries(data);  //muestra los obj

console.log(entries);

console.log(entries.length);     // muestra los elementos 

const values = Object.values(data); //muestra los valores
console.log(values);

const string = 'hello';                     // añadir cadenas de texto
console.log(string.padStart(7,'----'));
console.log(string.padEnd(12,'****'));

const obj = {
    name: 'oscar',  //coma end evitar errores
};