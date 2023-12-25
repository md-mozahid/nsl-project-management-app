import { useState } from "react";

const AddForm = () => {
  const [projectName, setProjectName] = useState("");
  const [projectHead, setProjectHead] = useState("");
  const [manpowerSite, setManpowerSite] = useState("");
  const [manpowerFactory, setManpowerFactory] = useState("");
  const [workingTime, setWorkingTime] = useState("");
  const [overTime, setOverTime] = useState("");
  const [breakTime, setBreakTime] = useState("");
  const [offDay, setOffDay] = useState("");
  const [remarks, setRemarks] = useState("");


  // reset input value
  // const resetInputValue = () => {
  //   setProjectName("");
  //   setProjectHead("");
  //   setManpowerSite("");
  //   setManpowerFactory("");
  //   setWorkingTime("");
  //   setOverTime("");
  //   setOffDay("");
  //   setRemarks("");
  // };

  // handle add project
  const handleAddProject = (e) => {
    e.preventDefault();
    // setProjectName(projectName);
    // setProjectHead(projectHead);
    // setManpowerSite(manpowerSite);
    // setManpowerFactory(manpowerFactory);
    // setWorkingTime(workingTime);
    // setOverTime(overTime);
    // setOffDay(offDay);
    // setRemarks(remarks);

    // dispatch(
    //   addProject(
    //     setProjectName(projectName),
    //     setProjectHead(projectHead),
    //     setManpowerSite(manpowerSite),
    //     setManpowerFactory(manpowerFactory),
    //     setWorkingTime(workingTime),
    //     setOverTime(overTime),
    //     setOffDay(offDay),
    //     setRemarks(remarks)
    //   )
    // );

    // reset
    // resetInputValue();
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
                  type="text"
                  placeholder="Site"
                  className="inputElm w-1/2"
                  value={manpowerSite}
                  onChange={(e) => setManpowerSite(e.target.value)}
                />
                <input
                  type="text"
                  name="factory"
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
            <button className="btn btn-primary btn-fw mt-6">Add</button>
          </div>
        </form>
      </div>
    </>
  );
};

export default AddForm;
