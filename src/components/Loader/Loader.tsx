import { FC } from "react";

import { LoaderProps, styles } from ".";
import cn from "../../helpers/className";

const Loader: FC<LoaderProps> = (props) => {
  const { fullscreen = false, className } = props;

  return (
    <div
      className={cn(styles.wrap, fullscreen && styles.fullscreen, className)}
    >
      <div className={styles.loader}>&nbsp;</div>
    </div>
  );
};

export default Loader;
