function* helloWorld(){
    if(true){
        yield 'hello, ';
    }

    if(true){
        yield 'World ';
    }
}

const generatorHello = helloWorld();
console.log(generatorHello.next().value);
console.log(generatorHello.next().value);
console.log(generatorHello.next().value);

// Secuencia Fibonachi
function* fibonacci(){
    var fn1 = 1;
    var fn2 = 1;
    while (true){  
        var actual = fn2;
        fn2 = fn1;
        fn1 = fn1 + actual;
        var reset = yield actual;
        if (reset){
            fn1 = 1;
            fn2 = 1;
        }
        }
    }

const secuencia = fibonacci();
  console.log(secuencia.next().value);     // 1
  console.log(secuencia.next().value);     // 1
  console.log(secuencia.next().value);     // 2
  console.log(secuencia.next().value);     // 3
  console.log(secuencia.next().value);     // 5
  console.log(secuencia.next().value);     // 8
  console.log(secuencia.next().value);     // 13
  console.log(secuencia.next(true).value); // 1
  console.log(secuencia.next().value);     // 1
  console.log(secuencia.next().value);     // 2
  console.log(secuencia.next().value);     // 3