import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import Input from '../../components/Input';
import styles from './styles.module.scss';
import { setClear } from '../../store/slices/wordsSlice';

const MainPage = () => {
  const words = useSelector((state: any) => state.words);
  const dispatch = useDispatch();
  console.log('data: ', words);

  const clear = () => {
    dispatch(setClear());
  };

  return (
    <div className={styles.wrapper}>
      <Input label={'Who'} className={styles.input} />
      <Input label={'What'} className={styles.input} />
      <Input label={'When'} className={styles.input} />
      <Input label={'Where'} className={styles.input} />
      <p className={styles.sentence}>{`${words.who}  ${words.what}  ${words.when}  ${words.where}.`}</p>
      <button className={styles.button} onClick={clear}>
        New Game
      </button>
    </div>
  );
};

export default MainPage;
