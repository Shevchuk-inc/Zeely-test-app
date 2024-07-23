import { FC, Suspense } from "react";
import { Outlet } from "react-router-dom";

import Loader from "../../components/Loader";
import ViewController from "./ViewController";

const ProjectView: FC = () => {
  return (
    <ViewController>
      <Suspense fallback={<Loader className="min-vh-100" />}>
        <Outlet />
      </Suspense>
    </ViewController>
  );
};

export default ProjectView;
