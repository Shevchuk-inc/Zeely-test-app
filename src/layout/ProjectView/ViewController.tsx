import BurgerIcon from "@/assets/react-svg/burger-icon.svg";
import { FC, ReactNode } from "react";

import Menu from "../Menu";
import Sidebar from "../Sidebar/Sidebar";
import styles from "./ProjectView.module.scss";

const ViewController: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <div className={styles.view}>
      <button className={styles.toggleButton}>
        <BurgerIcon />
      </button>

      <Menu />
      <main className={styles.content}>{children}</main>
      <Sidebar />
    </div>
  );
};

export default ViewController;
