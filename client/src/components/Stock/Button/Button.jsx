import { useSelector, useDispatch } from 'react-redux';
import {
  startStocks,
  stopStocks,
} from '../../../redux/stocks/stocks-operations';
import { selectStocksStopped } from '../../../redux/stocks/stocks-selectors';
import { buttonWrapper, button } from './Button.module.scss';

export default function Button() {
  const isStocksStopped = useSelector(selectStocksStopped);
  const dispatch = useDispatch();

  return (
    <div className={buttonWrapper}>
      <button
        type="button"
        className={button}
        onClick={() => dispatch(startStocks())}
        disabled={!isStocksStopped}
      >
        Start
      </button>
      <button
        type="button"
        className={button}
        onClick={() => dispatch(stopStocks())}
        disabled={isStocksStopped}
      >
        Stop
      </button>
    </div>
  );
}
