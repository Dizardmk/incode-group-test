import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import * as actions from './stocks-actions';

// getStocks
const list = createReducer([], {
  [actions.getStocksSuccess]: (_, { payload }) => payload,
});

// stopStocks
const stopped = createReducer(false, {
  [actions.startStocksSuccess]: () => false,
  [actions.stopStocksSuccess]: () => true,
});

export default combineReducers({
  list,
  stopped,
});
