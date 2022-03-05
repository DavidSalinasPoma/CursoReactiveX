/**
 * of = Toma argumntos y genera una secuencia
 * from =  Crear un observable en base a un arreglo, promise, iterable,obsevable
 */

import { of, from, Observer } from "rxjs";

// El observer es una interfas
const observer: Observer<any> = {
    next: value => console.log('next', value),
    error: error => console.warn('error', error),
    complete: () => console.info('Complete')
};


// from = esta esperando un array, promise, iterable,obsevable
// const source$ = from([1, 2, 3, 4, 5]);
// const source$ = of(...[1, 2, 3, 4, 5]);



// const source$ = from('Fernando');
// const source$ = of('Fernando');

/**
 * El from = tambien permite tomar cualquier cosa y convertilo en un Observable
 */

// const source$ = from(fetch('https://api.github.com/users/klerith'));

// Una forma de obtener la data
// source$.subscribe(async (resp) => {
//     console.log(resp);
//     const dataResp = await resp.json();
//     console.log(dataResp);
// });

// Funciones generadoras o iterables en javaScript
const miGenerador = function* () {
    yield 1;
    yield 2;
    yield 3;
    yield 4;
    yield 5;
};

const miIterable = miGenerador();

from(miIterable).subscribe(observer);