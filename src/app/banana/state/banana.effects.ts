import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { switchMap, map } from 'rxjs/operators';
import { INITIATE_TIME_HOP, InitiateTimeHop, TimeHopComplete } from './banana.action';
import { RotService } from '../../rot.service';

@Injectable()
export class BananaEffects {
  constructor(private actions$: Actions, private rot: RotService) {}

  @Effect()
  public initiateTimeHop$ = this.actions$.pipe(
    ofType(INITIATE_TIME_HOP),
    switchMap(   (action: InitiateTimeHop)=> 
      this.rot.rotBanana().pipe(
        map(color => new TimeHopComplete(color))
      ),
    ),
  );
}
