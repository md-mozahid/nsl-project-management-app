const AddForm = () => {
  return (
    <>
      <div className="max-w-[500px] mx-auto">
        <h2 className="text-3xl uppercase text-center my-7">
          Add Project Details
        </h2>
        <form>
          <div className="border border-[#111827] p-5 rounded-lg">
            <div className="">
              <label>Project Name</label>
              <input
                type="text"
                name="projectName"
                placeholder="Project name"
                className="inputElm"
              />
            </div>
            <div className="">
              <label>Project Head</label>
              <input
                type="text"
                name="projectHead"
                placeholder="Project head"
                className="inputElm"
              />
            </div>

            <div className="">
              <label>Manpower</label>
              <div className="flex space-x-3">
                <input
                  type="text"
                  name="site"
                  placeholder="Site"
                  className="inputElm w-1/2"
                />
                <input
                  type="text"
                  name="factory"
                  placeholder="Factory"
                  className="inputElm w-1/2"
                />
              </div>
            </div>

            <div className="flex space-x-3">
              <div className="w-1/2">
                <label>Working Time</label>
                <input
                  type="text"
                  name="workingTime"
                  placeholder="Working time"
                  className="inputElm"
                />
              </div>
              <div className="w-1/2">
                <label>Break</label>
                <input
                  type="text"
                  name="break"
                  placeholder="Break time"
                  className="inputElm"
                />
              </div>
            </div>

            <div className="flex space-x-3">
              <div className="w-1/2">
                <label>Over Time</label>
                <input
                  type="text"
                  name="overTime"
                  placeholder="Over time"
                  className="inputElm"
                />
              </div>
              <div className="w-1/2">
                <label>Off Day</label>
                <input
                  type="text"
                  name="offDay"
                  placeholder="Off day"
                  className="inputElm"
                />
              </div>
            </div>
            <div className="">
              <label>Remarks</label>
              <input
                type="text"
                name="remarks"
                placeholder="Remarks"
                className="inputElm"
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
