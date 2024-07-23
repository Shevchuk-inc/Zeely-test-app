import cn from "@/helpers/className";
import { FC } from "react";

import { BadgeProps } from ".";
import styles from "./Badge.module.scss";

const Badge: FC<BadgeProps> = ({ variant = "default", status, children }) => (
  <div className={cn(styles.badge, styles[variant], status && styles[status])}>
    <span>{children}</span>
  </div>
);

export default Badge;
