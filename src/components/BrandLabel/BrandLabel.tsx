import { FC } from "react";

import { BrandLabelProps } from ".";
import LightningIcon from "../../assets/react-svg/lightning-icon.svg";
import styles from "./BrandLabel.module.scss";

const BrandLabel: FC<BrandLabelProps> = ({ title }) => (
  <div className={styles.brand}>
    <LightningIcon />
    <span className={styles.brandTitle}>{title}</span>
  </div>
);

export default BrandLabel;
