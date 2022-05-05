// 🧯 Replace

const string = "JavaScript es maravilloso, con JavaScript puedo crear el futuro de la web.";
const replacedString = string.replace("JavaScript", "Python");                                //cambia el primer valor string por otro
console.log(replacedString);
function escapeRegExp(string) {
    return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'); // $& means the whole matched string
}
//// Output: Python es maravilloso, con JavaScript puedo crear el futuro de la web.

const replacedString2 = string.replaceAll("JavaScript", "Python");     // se reemplaza todos los caractere
console.log(replacedString2);


//otra forma porq el de a rriba no funciona
function escapeRegExp(string) {
    return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'); // $& means the whole matched string
    }
    function replaceAll(str, match, replacement){
        return str.replace(new RegExp(escapeRegExp(match), 'g'), ()=>replacement);
    }

console.log(replaceAll('a.b.c.d.e', '.', '__'));
console.log(replaceAll('a.b.c.d.e', '.', '$&'));
//// Output: Python es maravilloso, con Python puedo crear el futuro de la web.

// 🔒 Metodos privados
class Message {
    #show(val){ // Con el # convertimos al método en privado
        console.log(val);
    };
    /*
    get #add(val){
        //...
    }
    */
};

const message = new Message();
message.show('Hola!');


//  👽 Promise Any

const promise1 = new Promise((resolve, reject) => reject("1"));
const promise2 = new Promise((resolve, reject) => resolve("2"));
const promise3 = new Promise((resolve, reject) => resolve("3"));

Promise.any([promise1, promise2, promise3])                     // primer valor que se retorne
    .then(response => console.log(response));


//  🦴 WeakRef(element);

class AnyClass {
    constructor(element){
        this.ref = new WeakRef(element)        // referencua debil q el objeto no sea recogido por el basurero interno
    }
    //{...}
}

// 🧪 Nuevos operadores lógicos

let isTrue = 1;
let isFalse = 0;
isFalse &&= 2;
console.log( isFalse);

let isTrue1 = true;
let isFalse1 = false;
console.log(isTrue1 ||= isFalse1);

let isTrue2 = true;
let isFalse2 = false;
console.log(isTrue2 ??= isFalse2);

// operadores 
let name = {
    firstName: "Ram",
    lastName: "",
};

console.log(name.firstName);

// Changing the value using logical
// AND assignment operator
name.firstName &&= "Shyam";

// Here the value changed because
// name.firstName is truthy
console.log(name.firstName);

console.log(name.lastName);

// Changing the value using logical 
// AND assignment operator
name.lastName &&= "Kumar";

// Here the value remains unchanged 
// because name.lastName is falsy
console.log(name.lastName)