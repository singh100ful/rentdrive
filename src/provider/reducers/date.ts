import * as Action from 'src/provider/actions/actions';

const dateState = {pickup: new Date(), drop: new Date()};

const DateReducer = (state = dateState, action: any) => {
  switch (action.type) {
    case Action.ADD_PICKUP:
      return {...state, pickup: action.payload};

    case Action.ADD_DROP:
      return {...state, drop: action.payload};

    default:
      return state;
  }
};

export default DateReducer;
