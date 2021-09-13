import { createAction } from '@reduxjs/toolkit';

// getStocks
export const getStocksRequest = createAction('stocks/GET-Request');
export const getStocksSuccess = createAction('stocks/GET-Success');
export const getStocksError = createAction('stocks/GET-Error');

// startStocks
export const startStocksRequest = createAction('stocks/START-Request');
export const startStocksSuccess = createAction('stocks/START-Success');
export const startStocksError = createAction('stocks/START-Error');

// stopStocks
export const stopStocksRequest = createAction('stocks/STOP-Request');
export const stopStocksSuccess = createAction('stocks/STOP-Success');
export const stopStocksError = createAction('stocks/STOP-Error');

// intervalStocks
export const intervalStocksRequest = createAction('stocks/INTERVAL-Request');
export const intervalStocksSuccess = createAction('stocks/INTERVAL-Success');
export const intervalStocksError = createAction('stocks/INTERVAL-Error');

// deleteStock
export const deleteStockRequest = createAction('stocks/DELETE-Request');
export const deleteStockSuccess = createAction('stocks/DELETE-Success');
export const deleteStockError = createAction('stocks/DELETE-Error');
