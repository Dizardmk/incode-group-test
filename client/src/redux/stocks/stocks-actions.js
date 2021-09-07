import { createAction } from '@reduxjs/toolkit';

// getStocks
export const getStocksRequest = createAction('stocks/getStocksRequest');
export const getStocksSuccess = createAction('stocks/getStocksSuccess');
export const getStocksError = createAction('stocks/getStocksError');
