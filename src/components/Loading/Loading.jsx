import React from "react";
import { PuffLoader } from "react-spinners";

const Loading = () => {
  return (
    <div className="h-screen w-screen flex items-center justify-center">
      <PuffLoader color="orange" size={100}></PuffLoader>
    </div>
  );
};

export default Loading;
