
import { Observable, Observer, Subject } from 'rxjs';

// El observer es una interfas
// obliga a hacer todo lo que se necesita para que ese observer sea valido
const observer: Observer<any> = {
    next: value => console.log('next', value),
    error: error => console.warn('error', error),
    complete: () => console.info('Completado')

}

const intervalo$ = new Observable<number>(subs => {

    const intervalID = setInterval(() => {
        subs.next(Math.random());
    }, 1000);
    return () => {
        clearInterval(intervalID)
        console.log('Intervalo destruido');

    };
})

/**
 * 1- Castep multiple(distribuye el mismo valor)
 * 2.- Tambien es un observer
 * 3.- Next, error. complete
 */

// Creación del subject es un tipo especial de observables
const subject$ = new Subject();

// Injeccion del subject$ a intervalo$
const subscripcion = intervalo$.subscribe(subject$);

// const subs1 = subject$.subscribe(rnd => console.log('Subs1: ', rnd));
// const subs2 = subject$.subscribe(rnd => console.log('Subs2: ', rnd));


const subs1 = subject$.subscribe(observer);
const subs2 = subject$.subscribe(observer);

setTimeout(() => {
    subject$.next(10);
    subject$.complete();
    subscripcion.unsubscribe()
}, 3500);