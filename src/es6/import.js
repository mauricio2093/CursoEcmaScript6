//Modulo
/*
// Import que no me funcionaron
import hello from './module.js'     // inportar default
hello()
import {hello1} from './module.js'     // import nombrado
hello1()
import {bye as byeGreeting } from './module.js' // cambiando los nombres
byeGreeting()
import * as  AllServer from './module' // cambiando los nombres de todos
AllServer()
*/

// Usando modulo import de node

const hello =require('./module');
console.log(hello());