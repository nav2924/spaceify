import React from "react";

const Loader = () => {
  return (
    <div className="relative w-14 h-14">
      <div className="absolute inset-0 rounded-full border-[13.4px] border-blue-500 border-opacity-10 animate-spin-fast"></div>
      <div className="absolute inset-0 rounded-full border-[13.4px] border-blue-500 border-opacity-10 animate-spin-fast-reverse">
        <div className="absolute w-[13.4px] h-[13.4px] bg-blue-500 rounded-full top-1/2 right-0 transform -translate-y-1/2"></div>
      </div>
    </div>
  );
};

export default Loader;
