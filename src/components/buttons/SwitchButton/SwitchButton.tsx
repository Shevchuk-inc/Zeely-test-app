import cn from "@/helpers/className";
import { FC } from "react";

import { SwitchButtonProps } from ".";
import styles from "./SwitchButton.module.scss";

const SwitchButton: FC<SwitchButtonProps> = ({
  isActive,
  onToggle,
  id,
  variant = "default",
}) => {
  return (
    <div>
      <input
        name="toggle"
        type="checkbox"
        id="toggle-button"
        checked={isActive}
        onChange={() => onToggle(id)}
        className={cn(styles.switch, styles[variant])}
      />

      <label htmlFor="toggle-button"></label>
    </div>
  );
};

export default SwitchButton;
