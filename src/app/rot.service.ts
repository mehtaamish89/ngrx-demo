import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({providedIn: 'root'})
export class RotService {
  constructor() { }

  public rotBanana(): Observable<any> {
    console.log('Rot banana');
    const mill = 10000;
    return Observable.create(observer => {
      setTimeout(()=>{
        console.log('Done waiting');
        observer.next('brown');
        observer.complete();
      }, mill);
    })
  }

}