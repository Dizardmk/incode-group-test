import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getStocks } from '../../../redux/stocks/stocks-operations';
import { selectStocksList } from '../../../redux/stocks/stocks-selectors';
import {
  list,
  item,
  text,
  title,
  titleWrapper,
  profit,
  profitChange,
  loss,
  lossChange,
} from './List.module.scss';

export default function List() {
  const stocksList = useSelector(selectStocksList);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getStocks());
  }, [dispatch]);

  return (
    <ul className={`${list} list`}>
      <li className={`${item} ${titleWrapper}`}>
        <p className={`${text} ${title}`}>Ticker</p>
        <p className={`${text} ${title}`}>Exchange</p>
        <p className={`${text} ${title}`}>Price</p>
        <p className={`${text} ${title}`}>Change</p>
        <p className={`${text} ${title}`}>Change %</p>
        <p className={`${text} ${title}`}>Yield</p>
        <p className={`${text} ${title}`}>Dividend</p>
        <p className={`${text} ${title}`}>Last trade</p>
      </li>
      {stocksList.map(stock => {
        const isProfit = +stock.price - +stock.change > 0;

        return (
          <li className={item} key={stock.ticker}>
            <p className={text}>{stock.ticker}</p>
            <p className={text}>{stock.exchange}</p>
            <p className={text}>{stock.price} $</p>
            <p className={`${text} ${isProfit ? profit : loss}`}>
              {stock.change} $
            </p>
            <p className={`${text} ${isProfit ? profitChange : lossChange}`}>
              {stock.change_percent} %
            </p>
            <p className={text}>{stock.yield}</p>
            <p className={text}>{stock.dividend}</p>
            <p className={text}>{[...stock.last_trade_time].splice(11, 8)}</p>
          </li>
        );
      })}
    </ul>
  );
}
