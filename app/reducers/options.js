import { OPTIONS, MARKET_INFO } from '../actions/options';

export function options(state = [], action) {
  switch (action.type) {
    case OPTIONS:
      return action.payload.items;
    default:
      return state;
  }
}

export function marketInfo(state = {}, action) {
  switch (action.type) {
    case MARKET_INFO:
      return action.payload;
    default:
      return state;
  }
}
