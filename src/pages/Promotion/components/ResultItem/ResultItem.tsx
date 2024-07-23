import { FC } from "react";

import { ResultItemProps } from ".";
import styles from "./ResultItem.module.scss";

const ResultItem: FC<ResultItemProps> = ({ item }) => {
  return (
    <div className={styles.item}>
      <span className={styles.title}>{item.title}</span>

      <div className="d-flex">
        <span className={styles.value}>{item.value}</span>
        <span className={styles.currency}>{item.currencySymbol}</span>
      </div>
    </div>
  );
};

export default ResultItem;
