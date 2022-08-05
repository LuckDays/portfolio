import React, { Children } from "react";
import { Footer, Navbar } from ".";

export const layout = ({ Children }) => {
  return (
    <>
      <Navbar />
      <div className='py-2 px-5'>{Children}</div>
      <Footer />
    </>
  );
};
