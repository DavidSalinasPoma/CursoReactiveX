
// Funciones para crear observables
// of.- emite los valores de manera Sincrona de cualquier tipo.
// of tambien toma argumentos y genera una secuencia de valores

import { of } from 'rxjs';

// const obs$ = of(1, 2, 3, 4, 5, 6);
// const obs$ = of(...[1, 2, 3, 4, 5, 6], 2, 3, 4, 5);
const obs$ = of([1, 2], { a: 1, b: 2 }, function () { }, true, Promise.resolve(true));

// Observable de manera sincrona
console.log('Inicio del Obs$');
obs$.subscribe(
    next => console.log('next', next),
    null,
    () => console.log('Terminamos la secuencia')
);
console.log('Fin del Obs$');