import { ROUTES } from "@/constants/routePaths";
import { RouteObject } from "react-router-dom";

import { WithTitle } from "../../components/PageTitle";
import Creatives from "../../pages/Creatives";
import Home from "../../pages/Home";
import Promotion from "../../pages/Promotion";
import Setting from "../../pages/Setting";
import Shop from "../../pages/Shop";
import Video from "../../pages/Video";

const mainMenuRoutes: RouteObject[] = [
  {
    path: ROUTES.HOME,
    element: (
      <WithTitle title="Home">
        <Home />
      </WithTitle>
    ),
  },
  {
    path: ROUTES.CREATIVES,
    element: (
      <WithTitle title="Creatives">
        <Creatives />
      </WithTitle>
    ),
  },
  {
    path: ROUTES.VIDEO,
    element: (
      <WithTitle title="Video">
        <Video />
      </WithTitle>
    ),
  },
  {
    path: ROUTES.PROMOTION,
    element: (
      <WithTitle title="Promotion">
        <Promotion />
      </WithTitle>
    ),
  },
  {
    path: ROUTES.SHOP,
    element: (
      <WithTitle title="Shop">
        <Shop />
      </WithTitle>
    ),
  },
  {
    path: ROUTES.SETTING,
    element: (
      <WithTitle title="Setting">
        <Setting />
      </WithTitle>
    ),
  },
];

export default mainMenuRoutes;
