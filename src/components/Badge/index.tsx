import { ReactNode } from "react";

import Badge from "./Badge";

export default Badge;

export type BadgeProps = {
  children: ReactNode;
  variant?: "default" | "primary" | "secondary";
  status?: "success" | "warning" | "error" | "info" | "paused";
};
