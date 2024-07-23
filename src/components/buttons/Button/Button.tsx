import cn from "@/helpers/className";
import { FC } from "react";

import { ButtonProps } from ".";
import styles from "./Button.module.scss";

const Button: FC<ButtonProps> = ({ variant = "default", children }) => (
  <button className={cn(styles.button, styles[variant])}>{children}</button>
);

export default Button;
