import React, { ChangeEvent } from 'react';
import classNames from 'classnames';
import { useDispatch, useSelector } from 'react-redux';

import styles from './styles.module.scss';
import { setWhat, setWhen, setWhere, setWho } from '../../store/slices/wordsSlice';

type Props = {
  label: string;
  className?: string;
};

const Input: React.FC<Props> = ({ label, className = '' }) => {
  const dispatch = useDispatch();
  const words = useSelector((state: any) => state.words);
  const setValueToStore = (e: ChangeEvent<HTMLInputElement>) => {
    switch (label) {
      case 'Who':
        dispatch(setWho(e.target.value));
        break;
      case 'What':
        dispatch(setWhat(e.target.value));
        break;
      case 'When':
        dispatch(setWhen(e.target.value));
        break;
      case 'Where':
        dispatch(setWhere(e.target.value));
        break;
      default:
        break;
    }
  };

  return (
    <div className={classNames(styles.wrapper, className)}>
      <p className={styles.label}>{label}? </p>
      <input
        type="text"
        value={words[label.toLocaleLowerCase()]}
        className={styles.input}
        placeholder="input word"
        onChange={setValueToStore}
      />
    </div>
  );
};

export default Input;
