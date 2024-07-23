import { FC, PropsWithChildren } from "react";

import PageTitle from ".";

const WithTitle: FC<PropsWithChildren<{ title: string }>> = (props) => {
  const { children, title } = props;

  return (
    <>
      <PageTitle title={title} />
      {children}
    </>
  );
};

export default WithTitle;
