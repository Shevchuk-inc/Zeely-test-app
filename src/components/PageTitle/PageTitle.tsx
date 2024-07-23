import { FC } from "react";
import Helmet from "react-helmet";

const PageTitle: FC<{ title: string }> = ({ title }) => (
  <Helmet>
    <title>{title}</title>
  </Helmet>
);

export default PageTitle;
