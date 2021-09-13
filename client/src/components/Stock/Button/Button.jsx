import { useSelector, useDispatch } from 'react-redux';
import {
  startStocks,
  stopStocks,
  selectStopped,
} from '../../../redux/stocks/stocks-slice';
import { buttonWrapper, button } from './Button.module.scss';

export default function Button() {
  const isStocksStopped = useSelector(selectStopped);
  const dispatch = useDispatch();

  return (
    <div className={buttonWrapper}>
      <button
        type="button"
        aria-label="start stocks"
        className={button}
        onClick={() => dispatch(startStocks())}
        disabled={!isStocksStopped}
      >
        Start
      </button>
      <button
        type="button"
        aria-label="stop stocks"
        className={button}
        onClick={() => dispatch(stopStocks())}
        disabled={isStocksStopped}
      >
        Stop
      </button>
    </div>
  );
}
