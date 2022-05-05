const hello = () => {
    return "hello !"
}

/*
// ES6
export default hello     //Con export default podemos exportar una variable, o función por defecto de un archivo así

export const hello1 = () => {   // Con export defaul A diferencia del export default en esta ocasión podemos exportar 
    return "hello !"            //más de una variable o función que se encuentre en nuestro archivo, pero para importarlas                             
}                               //debemos hacerlo con el nombre exacto de esa variable entre llaves
export const bye = 'Bye!'
*/

// EXport de node

module.exports=hello;