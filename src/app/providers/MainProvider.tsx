import React from "react";
import { ReactQueryProvider } from "../lib/api/react-query-client";


type Props = {
  children: React.ReactNode;
};

const MainProvider = ({ children }: Props) => {
  return <ReactQueryProvider>{children}</ReactQueryProvider>;
};

export default MainProvider;
