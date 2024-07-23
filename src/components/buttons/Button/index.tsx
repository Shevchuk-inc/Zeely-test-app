import { ReactNode } from "react";

import Button from "./Button";

export default Button;

export type ButtonProps = {
  variant?: "default" | "primary" | "secondary";
  children: ReactNode;
};
