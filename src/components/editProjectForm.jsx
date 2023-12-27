import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useEditProjectMutation } from "../features/api/apiSlice";
import Label from "./label";

const EditProjectForm = ({ project }) => {
  const [editProject, { isSuccess }] = useEditProjectMutation();
  const navigate = useNavigate();

  const {
    id,
    projectName: initialProjectName,
    manpowerSite: initialManpowerSite,
    manpowerFactory: initialManpowerFactory,
    projectHead: initialProjectHead,
    workingTime: initialWorkingTime,
    breakTime: initialBreakTime,
    overTime: initialOverTime,
    offDay: initialOffDay,
    remarks: initialRemarks,
  } = project;

  const [projectName, setProjectName] = useState(initialProjectName);
  const [projectHead, setProjectHead] = useState(initialProjectHead);
  const [manpowerSite, setManpowerSite] = useState(initialManpowerSite);
  const [manpowerFactory, setManpowerFactory] = useState(
    initialManpowerFactory
  );
  const [workingTime, setWorkingTime] = useState(initialWorkingTime);
  const [overTime, setOverTime] = useState(initialOverTime);
  const [breakTime, setBreakTime] = useState(initialBreakTime);
  const [offDay, setOffDay] = useState(initialOffDay);
  const [remarks, setRemarks] = useState(initialRemarks);

  // reset input value
  const resetForm = () => {
    setProjectName("");
    setProjectHead("");
    setManpowerSite("");
    setManpowerFactory("");
    setWorkingTime("");
    setOverTime("");
    setBreakTime("");
    setOffDay("");
    setRemarks("");
  };

  // handle add project
  const handleEditProject = (e) => {
    e.preventDefault();

    editProject({
      id,
      data: {
        projectName,
        projectHead,
        manpowerSite,
        manpowerFactory,
        workingTime,
        breakTime,
        overTime,
        offDay,
        remarks,
      },
    });
    resetForm();
  };

  // navigate to home
  useEffect(() => {
    {
      isSuccess && navigate("/");
    }
  }, [isSuccess]);

  return (
    <>
      <div className="max-w-[500px] mx-auto">
        <h2 className="text-3xl uppercase text-center my-7">
          Edit Project Details
        </h2>
        <form onSubmit={handleEditProject}>
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
            <button className="btn btn-primary btn-fw mt-6">Update</button>
          </div>
        </form>
      </div>
    </>
  );
};

export default EditProjectForm;
