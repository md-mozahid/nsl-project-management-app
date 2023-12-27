import React from "react";

const Label = ({ children, className }) => {
  return (
    <>
      <label className=   {` text-slate-400 ${className}`}>{children}</label>
    </>
  );
};

export default Label;
