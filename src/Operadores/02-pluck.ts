/**
 * pluck.- Extrare el valor de un objeto que se esta emitiendo.
 */

import { fromEvent } from "rxjs";

import { pluck } from "rxjs/operators";


const keyup$ = fromEvent<KeyboardEvent>(document, 'keyup');

keyup$.subscribe(console.log);

keyup$
    .pipe(
        pluck('target', 'baseURI')
    )
    .subscribe(baseURI => console.log('pluck', baseURI));