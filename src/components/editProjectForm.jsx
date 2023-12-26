import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useEditProjectMutation } from "../features/api/apiSlice";

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
  const [projectHead, setProjectHead] = useState(initialManpowerSite);
  const [manpowerSite, setManpowerSite] = useState(initialManpowerFactory);
  const [manpowerFactory, setManpowerFactory] = useState(initialProjectHead);
  const [workingTime, setWorkingTime] = useState(initialWorkingTime);
  const [overTime, setOverTime] = useState(initialBreakTime);
  const [breakTime, setBreakTime] = useState(initialOverTime);
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
              <label>Project Name</label>
              <input
                type="text"
                placeholder="Project name"
                className="inputElm"
                value={projectName}
                onChange={(e) => setProjectName(e.target.value)}
              />
            </div>
            <div className="">
              <label>Project Head</label>
              <input
                type="text"
                placeholder="Project head"
                className="inputElm"
                value={projectHead}
                onChange={(e) => setProjectHead(e.target.value)}
              />
            </div>

            <div className="">
              <label>Manpower</label>
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
                <label>Working Time</label>
                <input
                  type="text"
                  placeholder="Working time"
                  className="inputElm"
                  value={workingTime}
                  onChange={(e) => setWorkingTime(e.target.value)}
                />
              </div>
              <div className="w-1/2">
                <label>Break</label>
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
                <label>Over Time</label>
                <input
                  type="text"
                  placeholder="Over time"
                  className="inputElm"
                  value={overTime}
                  onChange={(e) => setOverTime(e.target.value)}
                />
              </div>
              <div className="w-1/2">
                <label>Off Day</label>
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
              <label>Remarks</label>
              <input
                type="text"
                placeholder="Remarks"
                className="inputElm"
                value={remarks}
                onChange={(e) => setRemarks(e.target.value)}
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