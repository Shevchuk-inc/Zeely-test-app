import { CREATIVES_HEADER_LABELS } from "@/constants/creatives";
import { AppDispatch, RootState } from "@/store";
import { toggleCreative } from "@/store/slices/CreativesSlice";
import { CreativeType } from "@/types/creatives";
import React from "react";
import { useDispatch, useSelector } from "react-redux";

import CreativesCard from "../CreativesCard";
import styles from "./Creatives.module.scss";

const Creatives: React.FC = () => {
  const dispatch: AppDispatch = useDispatch();
  const creatives: CreativeType[] = useSelector(
    (state: RootState) => state.creatives.items,
  );

  const handleToggleCreative = (id: number) => {
    dispatch(toggleCreative(id));
  };

  const renderHeaderLabels = Object.values(CREATIVES_HEADER_LABELS).map(
    (key) => (
      <span key={key} className={styles.creativesHeaderTitle}>
        {key}
      </span>
    ),
  );

  return (
    <div className={styles.creatives}>
      <h2 className={styles.creativesTitle}>Creatives</h2>
      <div className={styles.creativesHeader}>{renderHeaderLabels}</div>

      {creatives.map((creative) => (
        <CreativesCard
          item={creative}
          key={creative.id}
          onToggle={handleToggleCreative}
        />
      ))}
    </div>
  );
};

export default Creatives;
