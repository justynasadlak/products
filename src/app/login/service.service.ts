import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor() {
  }

  getDasd(dataFromForm): Observable<string> {
    return of('zalogowalem sie').pipe(delay(1000));
  }
}
