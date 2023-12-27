import React from "react";
import ManpowerList from "../components/manpowerList/manpowerList";

const ManpowerDetails = () => {
  return (
    <>
      <div className="">
        <h1 className="text-left md:text-center md:text-4xl font-bold md:py-10 py-5 uppercase">
          Manpower Details
        </h1>
        <div className="flex justify-center">
          <ManpowerList />
        </div>
      </div>
    </>
  );
};

export default ManpowerDetails;
