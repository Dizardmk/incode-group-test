import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { intervalStocks } from '../../../redux/stocks/stocks-operations';
import { inputWrapper, input, button } from './Input.module.scss';

export default function Input() {
  const [fetchInterval, setFetchInterval] = useState('');
  const fetchIntervalHandler = event => {
    setFetchInterval(event.target.value);
  };

  const dispatch = useDispatch();
  const handleSubmit = event => {
    event.preventDefault();
    dispatch(intervalStocks(+fetchInterval));
    setFetchInterval('');
  };

  return (
    <form className={inputWrapper} onSubmit={handleSubmit}>
      <input
        type="number"
        className={input}
        placeholder="Enter your interval (ms)"
        value={fetchInterval}
        onChange={fetchIntervalHandler}
      />
      <button type="submit" className={button} disabled={fetchInterval === ''}>
        Set
      </button>
    </form>
  );
}
