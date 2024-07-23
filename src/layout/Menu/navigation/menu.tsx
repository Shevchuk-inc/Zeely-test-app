import { ROUTES } from "@/constants/routePaths";

import { NavItem } from "..";
import CreativesIcon from "../../../assets/react-svg/nav-creatives-icon.svg";
import HomeIcon from "../../../assets/react-svg/nav-home-icon.svg";
import PromotionIcon from "../../../assets/react-svg/nav-promotion-icon.svg";
import SettingIcon from "../../../assets/react-svg/nav-setting-icon.svg";
import ShopIcon from "../../../assets/react-svg/nav-shop-icon.svg";
import VideoIcon from "../../../assets/react-svg/nav-video-icon.svg";

const menuNavList: NavItem[] = [
  {
    label: "Home",
    icon: <HomeIcon />,
    path: ROUTES.HOME,
  },
  {
    label: "Creatives",
    icon: <CreativesIcon />,
    path: ROUTES.CREATIVES,
  },
  {
    label: "Video",
    icon: <VideoIcon />,
    path: ROUTES.VIDEO,
  },
  {
    label: "Promotion",
    icon: <PromotionIcon />,
    path: ROUTES.PROMOTION,
  },
  {
    label: "Shop",
    icon: <ShopIcon />,
    path: ROUTES.SHOP,
  },
  {
    label: "Setting",
    icon: <SettingIcon />,
    path: ROUTES.SETTING,
  },
];

export default menuNavList;
