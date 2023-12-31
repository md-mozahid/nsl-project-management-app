import React from "react";
import OverTime from "../components/overTime/overTime";

const OverTimes = () => {
  return (
    <>
      <div className="">
        <h1 className="text-left md:text-center md:text-4xl font-bold md:py-10 py-5 uppercase">
          Over Time List
        </h1>
        <div className="flex justify-center">
          <OverTime />
        </div>
      </div>
    </>
  );
};

export default OverTimes;
