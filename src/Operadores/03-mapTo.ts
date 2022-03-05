/**
 * mapTo.- Permite transformar la entrada en una salida especifica(numeros, objetos o lo que sea)
 */

import { fromEvent } from "rxjs";
import { mapTo } from "rxjs/operators";

const keyup$ = fromEvent<KeyboardEvent>(document, 'keyup');

keyup$
    .pipe(
        mapTo('Tecla presionada')
    )
    .subscribe(resp => console.log('mapTo', resp));