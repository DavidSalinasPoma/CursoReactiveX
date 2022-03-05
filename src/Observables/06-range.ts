/*
RANGE Emite una secuencia de numeros en base a un rango
por defecto son sincronos pero se puede transformar en asincronos utilizando un asyncScheduler
*/

import { asyncScheduler, of, range } from "rxjs";
// const src$ = of(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);

// const src$ = range(1, 5);

// asyncScheduler transforma de sincrono a asyncrono
const src$ = range(1, 5, asyncScheduler);


console.log('inicio');

src$.subscribe(resp => console.log(resp));


console.log('Fin');