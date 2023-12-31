import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useEditOvertimeMutation } from "../../features/api/apiSlice";
import Label from "../label";

const EditOverTimeForm = ({ overTimes }) => {
  const [editOvertime, { isSuccess }] = useEditOvertimeMutation();
  const navigate = useNavigate();

  console.log(overTimes);

  const {
    id,
    projectName: initialProjectName,
    manpowerName: initialManpowerName,
    overTime: initialOverTime,
    date: initialDate,
    remarks: initialRemarks,
  } = overTimes;

  const [projectName, setProjectName] = useState(initialProjectName);
  const [manpowerName, setManpowerName] = useState(initialManpowerName);
  const [overTime, setOverTime] = useState(initialOverTime);
  const [date, setDate] = useState(initialDate);
  const [remarks, setRemarks] = useState(initialRemarks);

  // reset input value
  const resetForm = () => {
    setProjectName("");
    setManpowerName("");
    setOverTime("");
    setDate("");
    setRemarks("");
  };

  // handle add project
  const handleEditOT = (e) => {
    e.preventDefault();

    editOvertime({
      id,
      data: {
        projectName,
        manpowerName,
        overTime,
        date,
        remarks,
      },
    });
    resetForm();
  };

  // navigate to over time list
  useEffect(() => {
    {
      isSuccess && navigate("/over-time");
    }
  }, [isSuccess]);

  return (
    <>
      <div className="max-w-[500px] mx-auto">
        <h2 className="text-3xl uppercase text-center my-7">
          Edit Project Details
        </h2>
        <form onSubmit={handleEditOT}>
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
                value={remarksOt}
                onChange={(e) => setRemarksOt(e.target.value)}
                cols="30"
                rows="2"
              />
            </div>
            <button className="btn btn-primary btn-fw mt-6">
              Update Over Time
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default EditOverTimeForm;
