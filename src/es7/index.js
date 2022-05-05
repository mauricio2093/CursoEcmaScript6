/*El problema con el nombre “ECMAScript 7” o "ES7"
ECMAScriptLa actual versión de ECMAScript es la número 7 (aunque sea la 6ª que sale realmente). 
El problema es que cuando en la Web buscas información sobre ES7 o ECMAScript 7 realmente de lo que están hablando 
no es de esta versión.

Se suponía que para esta última versión que acaba de salir se iban a incluir muchas nuevas funcionalidades en el lenguaje. 
Sin embargo no dio tiempo material y se ha lanzado una actualización muy descafeinada, con solo un par de cositas. 
La verdadera versión “grande” con enormes cambios fue la del año pasado, ES6 o ES2015. La más reciente, ES2016, 
es una actualización muy floja.

Así que cuando en Internet leas algo sobre ES7 en realidad están hablando de algo que no existe todavía y 
que de momento no se sabe cuándo va a estar disponible. Es posible que muchas de las nuevas características 
estén ya en ECMAScript 2017 (que sería realmente ES8), pero puede que tarden mucho más y sea finalmente en 2019 o 2020 
cuando veamos algunas de ellas. Así que mucho cuidado con lo que te digan sobre ES7: probablemente no estén hablando 
de lo que tú crees.

ECMAScript en los navegadores
Además cada navegador tiene su propia implementación de ECMAScript, es decir, su propio motor de JavaScript. Como todos se han creado siguiendo lo que indica ECMA, en principio son 100% compatibles, pero podemos encontrar pequeñas diferencias entre implementaciones, en especial en aquellas partes del estándar que no dejan 100% claro cómo se debe actuar. Del mismo modo, diferentes implementaciones del motor del lenguaje pueden estar más o menos optimizadas.

Estos son los principales motores de JavaScript en los navegadores y qué versión de ECMAScript implementan a día de hoy (julio de 2016):

Navegador Motor/Implementación Versión de ECMAScript
Google Chrome V8 6
Firefox SpiderMonkey 5.1 con muchas cosas de 6 y 7
Edge Chakra 5.1 con muchas cosas de 6 y 7
Safari JavaScriptCore - Webkit 5.1 con muchas cosas de 6 y 7
Internet Explorer Jscript 9.0 5.1

He incluido enlaces a las versiones Open Source de los motores (excepto el de IE, que no es de código abierto). Por cierto, 
V8 es el motor que está debajo también de NodeJS.

Como vemos, cada motor implementa el estándar de manera diferente y en el caso concreto de ECMAScript 6 y 7, 
no todos implementan todo ni de la misma manera. Dado que todos excepto IE son navegadores “Evergreen”, es decir, 
que se actualizan solos de manera automática, a menudo salen nuevas pequeñas actualizaciones que van añadiendo cada vez más
soporte para las últimas versiones de ECMAScript. De hecho se puede afirmar que todos 
los navegadores modernos soportan ECMAScript 6 casi por completo, y en breve también ES7.
*/

let numbers = [1,2,3,7,8];
if(numbers.includes){                                    // buscar un valor
    console.log('Si se encuentra el valor 7');
}else{
    console.log('No se encuentra el valor.');
};

let base = 4;
let exponent = 2;   
let result = base ** exponent;
console.log(result);