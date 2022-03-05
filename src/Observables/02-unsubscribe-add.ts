
import { Observable, Observer, Subscriber } from 'rxjs';

// El observer es una interfas
// obliga a hacer todo lo que se necesita para que ese observer sea valido
const observer: Observer<any> = {
    next: value => console.log('next', value),
    error: error => console.warn('error', error),
    complete: () => console.info('Completado')

}

const intervalo$ = new Observable<number>(subscriber => {
    // Crear un contador 1,2,3,4,5,.....
    let cont: number = 0;
    const interval = setInterval(() => {
        // Cada segundo
        cont++;
        subscriber.next(cont);
        // console.log(cont);

    }, 1000);

    setTimeout(() => {
        subscriber.complete();
    }, 2500);

    return () => {
        clearInterval(interval);
        console.log('Intervalo destruido');

    }
})

// Aqui estamos almacenando la subscripción
const subs1 = intervalo$.subscribe(observer);
const subs2 = intervalo$.subscribe(observer);
const subs3 = intervalo$.subscribe(observer);

subs1.add(subs2.add(subs3));


setTimeout(() => {
    subs1.unsubscribe();
    // subs2.unsubscribe();
    // subs3.unsubscribe();
    console.log('Completado timeout');
}, 6000);