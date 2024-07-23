import ArrowIcon from "@/assets/react-svg/arrow-icon.svg";
import cn from "@/helpers/className";
import { RootState } from "@/store/index";
import { FC, useState } from "react";
import { useSelector } from "react-redux";

import ResultItem from "../ResultItem";
import styles from "./Results.module.scss";

const Results: FC = () => {
  const { results } = useSelector((state: RootState) => state.results);
  const [showMore, setShowMore] = useState<boolean>(false);

  const visibleResultsNumber = 3;
  const visibleResults = showMore
    ? results
    : results.slice(0, visibleResultsNumber);
  const hiddenResults = showMore
    ? []
    : results.slice(results.length - visibleResults.length);
  const showMoreButtonText = showMore ? "Show less" : "Show more";

  const handleShowMore = () => {
    setShowMore(!showMore);
  };

  return (
    <div className={styles.results}>
      <h2 className={styles.resultsTitle}>Results</h2>

      <div className={styles.resultsList}>
        {visibleResults.map((data) => (
          <ResultItem item={data} key={data.id} />
        ))}

        {showMore &&
          hiddenResults.map((data) => <ResultItem item={data} key={data.id} />)}

        <button onClick={handleShowMore} className={styles.showMoreButton}>
          <span className={styles.showMoreButtonText}>
            {showMoreButtonText}
          </span>
          <div className={cn(styles.icon, showMore ? styles.open : "")}>
            <ArrowIcon />
          </div>
        </button>
      </div>
    </div>
  );
};

export default Results;
