import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import * as actions from './stocks-actions';

// getStocks
const list = createReducer([], {
  [actions.getStocksSuccess]: (_, { payload }) => payload,
});

// stopStocks
const stopped = createReducer(false, {
  [actions.stopStocksSuccess]: () => true,
  [actions.startStocksSuccess]: () => false,
  [actions.intervalStocksSuccess]: () => false,
});

export default combineReducers({
  list,
  stopped,
});
