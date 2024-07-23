import { FC, ReactNode } from "react";

import ArrowIcon from "../../assets/react-svg/arrow-icon.svg";
import styles from "./PageWrapper.module.scss";

const WithTitle: FC<{ children: ReactNode; title: string }> = ({
  title,
  children,
}) => (
  <>
    <div className={styles.arrowIcon}>
      <ArrowIcon />
    </div>

    <h1 className={styles.title}>{title}</h1>

    <section className={styles.section}>{children}</section>
  </>
);

export default WithTitle;
