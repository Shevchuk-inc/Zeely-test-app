import cn from "@/helpers/className";
import { FC } from "react";
import { NavLink } from "react-router-dom";

import { NavItem } from "../..";
import styles from "./NavList.module.scss";

const NavList: FC<{ list: NavItem[] }> = ({ list }) => (
  <ul className={styles.list}>
    {list.map(({ label, icon, path }) => {
      return (
        <li key={path}>
          <NavLink
            to={path}
            className={({ isActive }) =>
              cn(styles.item, isActive && styles.active)
            }
          >
            {icon}
            <span className={styles.itemLabel}>{label}</span>
          </NavLink>
        </li>
      );
    })}
  </ul>
);

export default NavList;
