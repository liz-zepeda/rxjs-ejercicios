
import { of } from 'rxjs';
import  { AjaxError, ajax } from 'rxjs/ajax';
import { catchError } from 'rxjs/operators';

const url = 'https://httpbinxx.org/delay/1';

const manejaError = (resp: AjaxError) => {
    console.warn('error', resp.message);
    return of({
        ok: false,
        usuarios: []
    })
}

const obs$ = ajax.getJSON( 
    url,
    {
        'Content-Type': 'application/json',
        'mi-token': 'abc123'
    } 
);

const obs2$ = ajax(url);

obs$.pipe(
    catchError(manejaError)
).subscribe(data => console.log('data:', data));

obs2$.pipe(
    catchError(manejaError)
)..subscribe(data => console.log('data:', data));


