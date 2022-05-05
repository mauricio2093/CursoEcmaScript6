
/*======  Funciones Con Parametros  ======*/

// funcion con parametros, antes usando var
function newFunction(name, age, country) {
  var name = name || 'oscar';
  var age = age || 32;
  var country = country || 'MX';
  console.log(name, age, country);
}

// funcion con parametros usando es6
function newFunction2(name = 'oscar', age = 32, country = "MX") {  // se realiza una funcion con parametros
  console.log(name, age, country);
};

newFunction2();                       // se llama la funcion
newFunction2('Ricardo', '23', 'CO');  // se llama la funcion con nuevos parametros

// version antigua
let hello = "Hello";
let world = "World";
let epicPhrase = hello + ' ' + world; //concatenacion anterior
console.log(epicPhrase);
// version es6
let epicPhrase2 = `${hello} ${world}`; //template literals 
console.log(epicPhrase2);
/*======  ****************  ======*/


/*======  Multilineas de strings  ======*/

// Antes
let lorem = "Qui consequatur. Commodi. Ipsum vel duis yet minima \n"
  + "otra frase epica que necesitamos."

// Ahra con ES6
let lorem2 = `otra frase epica que necesitamos
ahora es otra frase epica
`;
console.log(lorem);
console.log(lorem2);
/*======  *************  ======*/

/*======  Destructuracion de Elementos  ======*/

// Metodo antiguo
let person = {        // Objeto
  'firstName': 'oscar',
  'age': 32,
  'country': 'MX'
}

console.log(person.firstName, person.age);  

//Nueva version
let { firstName, age, country } = person;    //Destructuracion de elementos dentro del objeto
console.log(firstName,age);


//Operador de propagacion
let team1 = ['Oscar', 'Julian', 'Ricardo']; //elementos en arrglos
let team2 = ['Valeria', 'Yesica', 'Camila'];

let education = ['David', ...team1, ...team2];  // unir varios arreglos

console.log(education);

//Elementos duplicados
let team1_0 = ['oscar', 'andres', 'ricardo']
let team2_0 = ['andres', 'yesica', 'camila']

let education_0 = ['Carolina', ...team1_0, ...team2_0]    //se duplica el elemento
let education_1 = [...new Set(['Carolina', ...team1_0, ...team2_0])] // Set quita elementos duplicados
console.log(education_0,education_1)


{
  var globalVar = "Global Var";
}

{
  let globalLet = 'Global Let';
  console.log(globalLet);
}

console.log(globalVar);

//variable Const
const a = 'b';
a = 'a'; // no se asigna un valor a la variable const
console.log(a);

/*======  
podemos asignar un default param a los elementos dentro de un objeto
al momento en que estamos haciendo destructuring .
Esto es de bastante ayuda en momentos en los que tenemos un funcion 
que recibe muchos parametros, para evitar confundirnos en la posicion 
de algun parametro podemos simplemente recibir un solo parametro en la funcion 
y que este sea un objeto, luego hacemos destructuring para poder obtener 
sus elementos de manera mas facil. 
======*/
const obj = { nameFirst:undefined, lastName: undefined }
const { nameFirst = 'juan', lastname = 'perez' } = obj
console.log(nameFirst, lastname)
// console output -> pepe perez 

//Funcion recibiendo todos los parametros  sin un objeto
function saveUser( name, lastName, age, country, city, postalCode, userName, password ){
	console.log(`${name}, ${lastName}, ${age}, ${country}, ${city}, ${postalCode}, ${userName}, ${password}`);//... 
}
//Al recibir todos los parametros de esta forma podemos equivocarnos al momento de invocar esta funcion
saveUser('pepe', 'perez', 20, 'Toronto', 'Canada', 0000,  'peperez', '123pass' ) // intercambiamos el parametro Country por el parametro City accidentalmente

//funcion recibiendo solo 1 objeto como parametro
function saveUser({ name, lastName, age, country, city, postalCode = 0000, userName, password }){
	console.log(`${name}, ${lastName}, ${age}, ${country}, ${city}, ${postalCode}, ${userName}, ${password}`);//... 
}
saveUser({ name: 'pepe', lastName: "perez", age: 20, city: 'Toronto', country: 'Canada', userName: 'peperez', password:'123pass' })//aqui intercambiamos la posicion de country y city nuevamente, pero esta vez no importa ya que todo se esta pasando dentro de un objeto, adicionalmente no estamos enviando el elemento postalCode pero su valor por defecto es 0000

/*======  SCOPES  ======*/
// un array de objetos

console.log("\n Tabla De SCOPS ECMAScript6")
function tableScope (Keyword,Const,Let,Var) {
  this.Keyword = Keyword;
  this.Const = Const;
  this.Let = Let;
  this.Var = Var;
};

const fl2 = new tableScope("Global Scope","NO","NO","NO");
const fl3 = new tableScope("Function Scope", "YES","YES", "YES");
const fl4 = new tableScope("Block Scope","YES",  "YES", "NO");
const fl5 = new tableScope( "Can Be Reassigned","NO","YES", "YES");

console.table([fl2, fl3, fl4, fl5]);

/*======  OBjeto  ======*/
let Name = 'Oscar';
let Age = 32;

//ES5
obj = {Name: Name, Age: Age};
console.log(obj);
//Es6
obj2 = {Name, Age};
console.log(obj2);
a
/*======  Arrow Function  ======*/
// 
const names = [
  { name: 'Oscar', age : 32 },
  { name: 'Yesica', age : 27  },
];

let listOfNames = names.map(function (item){    // Funcion anonima
    console.log(item.name);
})

let listOfNames2 = names.map(item => console.log(item.name));

const listOfName3 = (name,age,country) => {
    //...
}
const listOfName4 = name  => {
    //...
}

const square = num => num * num;

//Promesas

const helloPromise = () => {                    //asignamos un arrow function
    return new Promise((resolve, reject) => {   // retornamos una nueva promesa (algo va a pasar)
      if(true){
          resolve('hey!');
      }else{
            reject('Ups!!');
      };
    });
}

helloPromise()
.then(response => console.log(response)) // obitnene la respuesta y se ejecuta a un console y la presentamos
.catch(error => console.log(error))      // si no cumple la promesa mostramos el error

//las funciones flechas heredan el this del scope del bloque en el que son declaradas. 
//A diferencia de las funciones regulares donde el this tiene el scope de la función. Ejemplo.
{
  this.as = 'Hola';
  
  const fun1 = () => {
      console.log(this.as) // this.a es "Hola"
  }
  const fun2 = function() {
      console.log(this.as); // this.a es undefined
  }

  fun1(); // Output: Hola
  fun2(); // Output: undefined
}