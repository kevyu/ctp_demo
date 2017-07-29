// @flow
import { combineReducers } from 'redux';
import { routerReducer as router } from 'react-router-redux';
import { options, marketInfo } from './options';

const rootReducer = combineReducers({
  options,
  marketInfo,
  router,
});

export default rootReducer;
