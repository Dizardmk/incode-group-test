import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import * as actions from './stocks-actions';

const stocksList = createReducer([], {
  [actions.getStocksSuccess]: (_, { payload }) => payload,
});

export default combineReducers({
  stocksList,
});
