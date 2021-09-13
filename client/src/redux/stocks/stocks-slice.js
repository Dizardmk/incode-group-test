import { createSlice } from '@reduxjs/toolkit';
import { io } from 'socket.io-client';

const socket = io('ws://localhost:4000', {
  query: {
    interval: 5000,
  },
});

const initialState = {
  list: [],
  stopped: false,
};

export const getAllStocks = () => dispatch => {
  socket.emit('start').on('ticker', data => dispatch(getStocks(data)));
};

export const StocksSlice = createSlice({
  name: 'stocks',
  initialState,
  reducers: {
    getStocks: (state, { payload }) => {
      return (state.list = [payload]);
    },
    startStocks: state => {
      socket.connect().emit('start');
      return (state.stopped = false);
    },
    stopStocks: state => {
      socket.disconnect();
      return (state.stopped = true);
    },
  },
});

export const selectList = state => state.stocks.list;
export const selectStopped = state => state.stocks.stopped;

export const { getStocks, startStocks, stopStocks } = StocksSlice.actions;
export default StocksSlice.reducer;
