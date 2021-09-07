import { io } from 'socket.io-client';
import * as actions from './stocks-actions';

// getStocks
export const getStocks = () => async dispatch => {
  dispatch(actions.getStocksRequest());

  try {
    const stocksSocket = await io('ws://localhost:4000');
    stocksSocket.emit('start');
    stocksSocket.on('ticker', data => dispatch(actions.getStocksSuccess(data)));
  } catch (error) {
    dispatch(actions.getStocksError(error.message));
  }
};
