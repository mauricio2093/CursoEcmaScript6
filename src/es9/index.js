const obj = {
    name: 'Mauricio',
    age: 28,
    country: 'COL',
};

let{ name, ...all } = obj;
console.log(name, all);

let{ country, ...alls } = obj;
console.log(alls);


const obj1 = {
    name: 'Oscar ',
};

const obj2 = {
    ...obj1,
    country: 'MX',
};

console.log(obj2);

//Promesas
const helloWord = () => {
    return new Promise((resolve, reject) => {
        (true) 
            ? setTimeout(()=> resolve('Helllo word'),3000)
            :reject(new Error('Test Error'))
    });
};

helloWord()
    .then(response => console.log(response))
    .catch(error => console.log(error))
    .finally(() => console.log('Finalizo'))


/* RegexDAta*/
const regexData =  /(?<year>[0-9]{4})-(?<month>[0-9]{2})-(?<day>[0-9]{2})/;    
const match = regexData.exec('2018-04-20');
const year = match[1];
const month = match[2];
const day = match[3];
console.log(year, month, day);

/*======  
🌟 Otra de las nuevas características de ES9 en la captura de grupos es nombrar 
nuestros grupos para encontrarlos de una forma más fácil. El código que hace el profe Oscar 
al final podría resumirse en lo siguiente:  
======*/
//soportado para navegadores pero no para nodejs.
//Entonces depende del tipo de proyecto aplica,
const regexData1 = /(?<year1>[0-9]{4})-(?<month1>[0-9]{2})-(?<day1>[0-9]{2})/
const match1 = regexData1.exec('2018-04-20');
const { year1, month1, day1 } = match1.groups;

console.log(year1, month1, day1);

