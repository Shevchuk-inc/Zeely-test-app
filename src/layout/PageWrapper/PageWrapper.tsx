import { FC, ReactNode } from "react";

import styles from "./PageWrapper.module.scss";
import WithTitle from "./WithTitle";

const PageWrapper: FC<{ children: ReactNode; title: string }> = ({
  title,
  children,
}) => (
  <div className={styles.wrapper}>
    <WithTitle title={title}>{children}</WithTitle>
  </div>
);

export default PageWrapper;
