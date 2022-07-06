import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import Input from '../../components/Input';
import styles from './styles.module.scss';
import { setClear } from '../../store/slices/wordsSlice';

const MainPage = () => {
  const words = useSelector((state: any) => state.words);
  const dispatch = useDispatch();

  const clear = () => {
    dispatch(setClear());
  };

  return (
    <div className={styles.wrapper}>
      <Input label={'Who'} className={styles.input} />
      <Input label={'What'} className={styles.input} />
      <Input label={'When'} className={styles.input} />
      <Input label={'Where'} className={styles.input} />
      <p className={styles.sentence}>{`${words.who.charAt(0).toUpperCase() + words.who.slice(1)}  ${words.what} ${
        words.where
      }  ${words.when}.`}</p>
      <button className={styles.button} onClick={clear}>
        New Game
      </button>
    </div>
  );
};

export default MainPage;
