/**
 * MAP.- permite transformar o extraer informacion lo que emite el observable 
 */

// RANGE Emite una secuencia de numeros en base a un rango
import { fromEvent, range } from "rxjs";

// Importando operadores
import { map } from "rxjs/operators";


// Ejemplo 1.
// range(1, 5)
//     .pipe(
//         // Recibimos el valor(val)
//         map<number, number>(val => (val * 10))
//     )
//     .subscribe(resp => {
//         console.log(resp);

//     });

// Ejemplo 2
// keyup.- va a estar pendiente cuando suelte una tecla
const keyup$ = fromEvent<KeyboardEvent>(document, 'keyup');

keyup$
    .pipe(
        map(evento => evento.code)
    )
    .subscribe(code => console.log('map', code));




