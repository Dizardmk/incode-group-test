import { io } from 'socket.io-client';
import * as actions from './stocks-actions';

const socket = io('ws://localhost:4000', {
  query: {
    // default fetch interval for socket.io (ms)
    interval: 5000,
    // default tickers
    tickers: ['AAPL', 'GOOGL', 'MSFT', 'AMZN', 'FB', 'TSLA'],
  },
});

// Request all stocks
export const getStocks = () => dispatch => {
  dispatch(actions.getStocksRequest());
  try {
    socket.emit('start').on('ticker', data => {
      dispatch(actions.getStocksSuccess(data));
      if (data.length === 0) {
        return socket.disconnect();
      }
    });
  } catch (error) {
    dispatch(actions.getStocksError(error));
  }
};

// Starts request stocks
export const startStocks = () => dispatch => {
  dispatch(actions.startStocksRequest());
  try {
    socket.connect().emit('start');
    dispatch(actions.startStocksSuccess());
  } catch (error) {
    dispatch(actions.startStocksError(error));
  }
};

// Stops request stocks
export const stopStocks = () => dispatch => {
  dispatch(actions.stopStocksRequest());
  try {
    socket.disconnect();
    dispatch(actions.stopStocksSuccess());
  } catch (error) {
    dispatch(actions.stopStocksError(error));
  }
};

// Set interval for request stocks
export const intervalStocks = fetchInterval => dispatch => {
  dispatch(actions.intervalStocksRequest());
  try {
    socket.disconnect();
    socket.io.opts.query.interval = fetchInterval;
    socket.connect().emit('start');
    dispatch(actions.intervalStocksSuccess());
  } catch (error) {
    dispatch(actions.intervalStocksError(error));
  }
};

// Delete stocks item
export const deleteStock = tickerIndex => dispatch => {
  dispatch(actions.deleteStockRequest());
  try {
    socket.disconnect();
    socket.io.opts.query.tickers.splice(tickerIndex, 1);
    socket.connect().emit('start');
    dispatch(actions.deleteStockSuccess());
  } catch (error) {
    dispatch(actions.deleteStockError(error));
  }
};
