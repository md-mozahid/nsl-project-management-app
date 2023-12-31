import React from "react";
import OverTimes from "../components/overTime/overTimes";

const ProjectOverTimes = () => {
  return (
    <>
      <div className="">
        <h1 className="text-left md:text-center md:text-4xl font-bold md:py-10 py-5 uppercase">
          Over Time List
        </h1>
        <div className="flex justify-center">
          <OverTimes />
        </div>
      </div>
    </>
  );
};

export default ProjectOverTimes;
