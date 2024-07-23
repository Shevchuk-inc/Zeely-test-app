import { FC, useState } from "react";

import { CheckboxProps } from ".";
import styles from "./Checkbox.module.scss";

const Checkbox: FC<CheckboxProps> = ({ checked, disabled }) => {
  const [isChecked, setIsChecked] = useState(checked);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setIsChecked(e.target.checked);
  };

  return (
    <div className={styles.checkbox}>
      <input
        type="checkbox"
        id="checkbox-input"
        checked={isChecked}
        disabled={disabled}
        onChange={handleChange}
        className={styles.checkboxInput}
      />
      <label htmlFor="checkbox-input" className={styles.checkboxLabel}></label>
    </div>
  );
};

export default Checkbox;
