import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAddOTMutation } from "../../features/api/apiSlice";
import Label from "../label";

const OverTimeForm = () => {
  const [projectName, setProjectName] = useState("");
  const [manpowerName, setManpowerName] = useState("");
  const [overTime, setOverTime] = useState("");
  const [date, setDate] = useState("");
  const [remarks, setRemarks] = useState("");

  const [addOT, { isLoading, isError, isSuccess }] = useAddOTMutation();
  const navigate = useNavigate();

  // reset input value
  const resetForm = () => {
    setProjectName("");
    setManpowerName("");
    setOverTime("");
    setDate("");
    setRemarks("");
  };

  // handle add project
  const handleAddOverTime = (e) => {
    e.preventDefault();

    addOT({
      projectName,
      manpowerName,
      overTime,
      date,
      remarks,
    });
    resetForm();
    navigate("/over-time");
  };
  return (
    <>
      <div className="max-w-[500px] mx-auto">
        <h2 className="text-3xl uppercase text-center my-7">
          Add Manpower Details
        </h2>
        <form onSubmit={handleAddOverTime}>
          <div className="border border-[#111827] p-5 rounded-lg">
            <div className="">
              <Label>Project Name</Label>
              <input
                type="text"
                placeholder="Project name"
                className="inputElm"
                value={projectName}
                onChange={(e) => setProjectName(e.target.value)}
              />
            </div>
            <div className="">
              <Label>Manpower Name</Label>
              <input
                type="text"
                placeholder="Manpower name"
                className="inputElm"
                value={manpowerName}
                onChange={(e) => setManpowerName(e.target.value)}
              />
            </div>
            <div className="flex space-x-3">
              <div className="w-1/2">
                <Label>Over Time</Label>
                <input
                  type="text"
                  placeholder="Over time"
                  className="inputElm"
                  value={overTime}
                  onChange={(e) => setOverTime(e.target.value)}
                />
              </div>
              <div className="w-1/2">
                <Label>Date</Label>
                <input
                  type="text"
                  placeholder="Date"
                  className="inputElm"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                />
              </div>
            </div>
            <div className="">
              <Label>Remarks</Label>
              <textarea
                type="text"
                placeholder="Remarks"
                className="inputElm"
                value={remarks}
                onChange={(e) => setRemarks(e.target.value)}
                cols="30"
                rows="2"
              />
            </div>
            <button className="btn btn-primary btn-fw mt-6">
              Add Over Time
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default OverTimeForm;
