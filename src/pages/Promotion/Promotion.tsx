import PageWrapper from "@/layout/PageWrapper";
import { FC } from "react";

import Creatives from "./components/Creatives";
import Info from "./components/Info";
import Results from "./components/Results";

const Promotion: FC = () => (
  <PageWrapper title="Promotion">
    <Info />
    <Results />
    <Creatives />
  </PageWrapper>
);

export default Promotion;
