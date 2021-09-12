// import { useCallback } from 'react';
// import { useSelector, useDispatch } from 'react-redux';
// import {
//   startStocks,
//   stopStocks,
// } from '../../../redux/stocks/stocks-operations';
// import { stocksStopped } from '../../../redux/stocks/stocks-selectors';
import { inputWrapper, input, button } from './Input.module.scss';

export default function Input() {
  //   const isStocksStopped = useSelector(stocksStopped);
  //   const dispatch = useDispatch();

  //   const onStartHandler = useCallback(() => {
  //     dispatch(startStocks());
  //   }, [dispatch]);

  return (
    <form className={inputWrapper}>
      <input
        type="number"
        className={input}
        placeholder="Enter your interval (ms)"
      />
      <button type="submit" className={button}>
        Set
      </button>
    </form>
  );
}
