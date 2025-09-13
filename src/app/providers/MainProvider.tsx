import React from "react";
import { ReactQueryProvider } from "../lib/api/react-query-client";
import { Header } from "../components/shared/header";
import { Footer } from "../components/shared/footer";

type Props = {
  children: React.ReactNode;
};

const MainProvider = ({ children }: Props) => {
  return (
    <ReactQueryProvider>
      <Header />
      <main>{children}</main>
      <Footer />
    </ReactQueryProvider>
  );
};

export default MainProvider;
