import { asyncScheduler } from 'rxjs';
/**
 *  EL asyncScheduler crea una suscripcion
 * Una subscripcion es el producto de un subscribe
 */

// Estas dos instruciones se pueden realizar con el asynScheduler
// setTimeout(() => {}, 3000);
// setInterval(() => {}, 3000);

const saludar = () => console.log('Hola Mundo');
const saludar2 = (nombre,) => console.log('Hola: ', nombre);

// Muestra despues de dos segundos la funcion saludar
// asyncScheduler.schedule(saludar, 2000);


// Solo puede mandar un parametro es su estado
// asyncScheduler.schedule(saludar2, 2000, { nombre: 'David', apellido: 'Salinas' });


// Para trabajar con setInterval NO puede ser una función de flecha, tiene que ser una funcion normal
// Es asyncrono
const subs = asyncScheduler.schedule(function (state) {
    console.log('state', state);

    this.schedule(state + 1, 1000)

}, 3000, 0)

// Aqui cancelamos la suscripcion del intervalo de 2 formas
// setTimeout(() => {
//     subs.unsubscribe();
// }, 6000);
asyncScheduler.schedule(() => subs.unsubscribe(), 6000);