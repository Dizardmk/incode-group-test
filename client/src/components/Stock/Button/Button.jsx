import { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  startStocks,
  stopStocks,
} from '../../../redux/stocks/stocks-operations';
import { stocksStopped } from '../../../redux/stocks/stocks-selectors';
import { buttonWrapper, button } from './Button.module.scss';

export default function Button() {
  const isStocksStopped = useSelector(stocksStopped);
  const dispatch = useDispatch();

  const onStartHandler = useCallback(() => {
    dispatch(startStocks());
  }, [dispatch]);

  const onStopHandler = useCallback(() => {
    dispatch(stopStocks());
  }, [dispatch]);

  return (
    <div className={buttonWrapper}>
      <button
        type="button"
        className={button}
        onClick={onStartHandler}
        disabled={!isStocksStopped}
      >
        Start
      </button>
      <button
        type="button"
        className={button}
        onClick={onStopHandler}
        disabled={isStocksStopped}
      >
        Stop
      </button>
    </div>
  );
}
