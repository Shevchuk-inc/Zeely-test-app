import ProjectView from "../layout/ProjectView";
import mainMenuRoutes from "./routes/mainMenu.routes";
import { createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
  {
    element: <ProjectView />,
    children: [...mainMenuRoutes],
  },
]);

export default router;
