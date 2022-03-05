/**
 * Dos funciones que permiten trabajar con intervalo de tiempo
 * 1.-interval
 * 2.- timer
 * Son asyncronos por naturaleza
 */

import { interval, Observer, timer } from "rxjs";

// El OBSERVER es una interface
const observer: Observer<any> = {
    next: value => console.log('Siguiente [next]', value),
    error: error => console.warn('error [obs]', error),
    complete: () => console.info('Completado [obs]')
}



// Es ASINCRONO
console.log('Inicio');


const hoyEn5 = new Date(); // ahora
hoyEn5.setSeconds(hoyEn5.getSeconds() + 5); // Aqui le sumamos 5 segundos



const interval$ = interval(1000);

// Timer
// 1.-Inicia la secuencia cada 9 segundos
// const timer$ = timer(9000);
// 2.-Inicia la secuencia cada segundo despues de 9 segundos
// const timer$ = timer(9000, 1000);
// 3.- Programando con hora real
const timer$ = timer(hoyEn5);



// Se ejecuta despues de 9 segundos
timer$.subscribe(observer);

// interval$.subscribe(observer)


console.log('Fin');