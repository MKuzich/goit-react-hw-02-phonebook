import React from 'react';
import styles from './Statistics.module.css';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => (
  <>
    <div className={styles.wrapper}>
      <p className={styles.item}>
        Good:
        <span className={styles.good}>{good}</span>
      </p>
      <p className={styles.item}>
        Neutral:
        <span className={styles.neutral}>{neutral}</span>
      </p>
      <p className={styles.item}>
        Bad:
        <span className={styles.bad}>{bad}</span>
      </p>
      <p className={styles.item}>
        Total:
        <span>{total}</span>
      </p>
      <p className={styles.item}>
        Positive:
        <span>{positivePercentage}%</span>
      </p>
    </div>
  </>
);

export default Statistics;
