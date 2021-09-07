import { configureStore } from '@reduxjs/toolkit';
import stocksList from './stocks/stocks-reducer';

const store = configureStore({
  reducer: {
    stocks: stocksList,
  },
  devTools: process.env.NODE_ENV === 'development',
});

export default store;
