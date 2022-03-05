
// Todo lo que viene de rxjs es para crear Observables
import { Observable, Observer } from 'rxjs';



// El OBSERVER es una interfas
// obliga a hacer todo lo que se necesita para que ese observer sea valido
const observer: Observer<any> = {
    next: value => console.log('Siguiente [next]', value),
    error: error => console.warn('error [obs]', error),
    complete: () => console.info('Completado [obs]')

}

// Es para crear un Observable es una instruccion poco comun
// const obs$ = Observable.create();

// Esta definicion de observables permite crear suscripciones
// Suscripcion: gente que va estar pendiente de las emisiones de los observables
const obs$ = new Observable<string>(subs => {
    // Emitimos valores
    subs.next('Hola');
    subs.next('Mundo');
    subs.next('Hola');
    subs.next('Mundo');

    // Forzar error
    // const a = undefined;
    // a.nombre = 'David';

    // Ninguna emision posterior a a la llamada del complete
    // va a ser notificada a sus suscriptores
    subs.complete();
    // Es decir que estos no van a ser notificados
    subs.next('Hola');
    subs.next('Mundo');
});


// Nos suscribimos al observable
// Formas
//1.- obs$.subscribe(resp=>console.log());
//2.- obs$.subscribe(console.log);
//3.- obs$.subscribe(
//     valor => console.log('Next: ', valor),
//     error => console.warn('error', error),
//     () => console.info('Completado')
// );

// 3 es lo mismo que 4

//4.- obs$.subscribe(
//     resp => {
//         console.log('Next', resp);
//     },
//     (err) => {
//         console.log('Error', err);
//     },
//     () => {
//         console.log('Completado');
//     }
// )

//5.- Quinta forma definitiva con el Observer
obs$.subscribe(observer);



