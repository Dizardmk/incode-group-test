import { io } from 'socket.io-client';
import * as actions from './stocks-actions';

const socket = io('ws://localhost:4000', {
  query: {
    interval: 5000,
  },
});

// getStocks
export const getStocks = () => async dispatch => {
  dispatch(actions.getStocksRequest());
  try {
    socket
      .emit('start')
      .on('ticker', data => dispatch(actions.getStocksSuccess(data)));
  } catch (error) {
    dispatch(actions.getStocksError(error.message));
  }
};

// startStocks
export const startStocks = () => async dispatch => {
  dispatch(actions.startStocksRequest());
  try {
    socket.connect().emit('start');
    dispatch(actions.startStocksSuccess());
  } catch (error) {
    dispatch(actions.startStocksError(error.message));
  }
};

// stopStocks
export const stopStocks = () => async dispatch => {
  dispatch(actions.stopStocksRequest());
  try {
    socket.disconnect();
    dispatch(actions.stopStocksSuccess());
  } catch (error) {
    dispatch(actions.stopStocksError(error.message));
  }
};
