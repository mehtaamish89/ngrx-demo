import {Action} from '@ngrx/store';

export const GET_NEW_BANANA = 'Get new Banana';
export const PEEL_BANANA = 'Peel Banana';
export const EAT_BANANA = 'Eat Banana';
export const INITIATE_TIME_HOP = 'Initiate time hop';
export const TIME_HOP_COMPLETE = 'Time hop complete';

export class GetNewBanana implements Action {
  readonly type: string = GET_NEW_BANANA;

  constructor(public payload: any) {
    console.log('Action ' + GET_NEW_BANANA );
  }
}

export class PeelBanana implements Action {
  readonly type: string = PEEL_BANANA;

  constructor(public payload: any) {
    console.log('Action ' + PEEL_BANANA );
  }
}

export class EatBanana implements Action {
  readonly type: string = EAT_BANANA;

  constructor(public payload: number) {
    console.log('Action ' + EAT_BANANA );
  }
}

export class InitiateTimeHop implements Action {
  readonly type: string = INITIATE_TIME_HOP;

  constructor(public payload: number) {
    console.log('Action ' + INITIATE_TIME_HOP );
  }
}

export class TimeHopComplete implements Action {
  readonly type: string = TIME_HOP_COMPLETE;

  constructor(public payload: number) {
    console.log('Action ' + TIME_HOP_COMPLETE );
  }
}

export type BananaAction = GetNewBanana | PeelBanana | EatBanana | InitiateTimeHop | TimeHopComplete ;