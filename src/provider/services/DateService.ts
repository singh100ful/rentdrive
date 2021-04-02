import * as Action from 'src/provider/actions/actions';

export const Failed = (err: any) => ({type: Action.DATE_FAILED, payload: err});

export const Fetch = (date: any) => ({type: Action.FETCH_DATE, payload: date});

export const Pickup = (pickup: any) => ({
  type: Action.ADD_PICKUP,
  payload: pickup,
});

export const Drop = (drop: any) => ({type: Action.ADD_DROP, payload: drop});
