import BrandLabel from "@/components/BrandLabel/BrandLabel";
import { ROUTES } from "@/constants/routePaths";
import { FC } from "react";
import { Link } from "react-router-dom";

import Logo from "../../assets/images/Logo.png";
import styles from "./Menu.module.scss";
import NavList from "./components/NavList/NavList";
import menuNavList from "./navigation/menu";

const Menu: FC = () => {
  return (
    <div className={styles.sidebar}>
      <Link to={ROUTES.HOME}>
        <div className={styles.wrapper}>
          <img src={Logo} alt="logo" className={styles.logo} />
          <BrandLabel title="Growth" />
        </div>
      </Link>
      <nav>
        <NavList list={menuNavList} />
      </nav>
    </div>
  );
};

export default Menu;
