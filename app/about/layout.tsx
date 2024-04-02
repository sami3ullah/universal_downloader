import React from "react";
import Header from "../(component)/Header";
import Footer from "../(component)/Footer";

type Props = {
  children: React.ReactNode;
};

const layout = ({ children }: Props) => {
  return (
    <main className="h-full">
      <div className="flex flex-col h-full">
        <Header />
        <div className="h-full relative">{children}</div>
        <Footer />
      </div>
    </main>
  );
};

export default layout;
