import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAddProjectMutation } from "../features/api/apiSlice";
import Label from "../components/label";

const AddProject = () => {
  const [projectName, setProjectName] = useState("");
  const [projectHead, setProjectHead] = useState("");
  const [manpowerSite, setManpowerSite] = useState("");
  const [manpowerFactory, setManpowerFactory] = useState("");
  const [workingTime, setWorkingTime] = useState("8am - 5pm");
  const [overTime, setOverTime] = useState("");
  const [breakTime, setBreakTime] = useState("1hr");
  const [offDay, setOffDay] = useState("");
  const [remarks, setRemarks] = useState("");

  const [addProject, { isLoading, isError, isSuccess }] =
    useAddProjectMutation();
  const navigate = useNavigate();

  // reset input value
  const resetForm = () => {
    setProjectName("");
    setProjectHead("");
    setManpowerSite("");
    setManpowerFactory("");
    setWorkingTime("");
    setOverTime("");
    setOffDay("");
    setRemarks("");
  };

  // handle add project
  const handleAddProject = (e) => {
    e.preventDefault();

    addProject({
      projectName,
      projectHead,
      manpowerSite,
      manpowerFactory,
      workingTime,
      breakTime,
      overTime,
      offDay,
      remarks,
    });
    resetForm();
    navigate("/");
  };
  return (
    <>
      <div className="max-w-[500px] mx-auto">
        <h2 className="text-3xl uppercase text-center my-7">
          Add Project Details
        </h2>
        <form onSubmit={handleAddProject}>
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
              <Label>Project Head</Label>
              <input
                type="text"
                placeholder="Project head"
                className="inputElm"
                value={projectHead}
                onChange={(e) => setProjectHead(e.target.value)}
              />
            </div>

            <div className="">
              <Label>Manpower</Label>
              <div className="flex space-x-3">
                <input
                  type="number"
                  placeholder="Site"
                  className="inputElm w-1/2"
                  value={manpowerSite}
                  onChange={(e) => setManpowerSite(e.target.value)}
                />
                <input
                  type="number"
                  placeholder="Factory"
                  className="inputElm w-1/2"
                  value={manpowerFactory}
                  onChange={(e) => setManpowerFactory(e.target.value)}
                />
              </div>
            </div>

            <div className="flex space-x-3">
              <div className="w-1/2">
                <Label>Working Time</Label>
                <input
                  type="text"
                  placeholder="Working time"
                  className="inputElm"
                  value={workingTime}
                  onChange={(e) => setWorkingTime(e.target.value)}
                />
              </div>
              <div className="w-1/2">
                <Label>Break</Label>
                <input
                  type="text"
                  placeholder="Break time"
                  className="inputElm"
                  value={breakTime}
                  onChange={(e) => setBreakTime(e.target.value)}
                />
              </div>
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
                <Label>Off Day</Label>
                <input
                  type="text"
                  placeholder="Off day"
                  className="inputElm"
                  value={offDay}
                  onChange={(e) => setOffDay(e.target.value)}
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
            <button className="btn btn-primary btn-fw mt-6">Add</button>
          </div>
        </form>
      </div>
    </>
  );
};

export default AddProject;
