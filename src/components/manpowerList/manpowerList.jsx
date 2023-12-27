import Manpower from "./manpower";
import TableTh from ".././th";
import Button from "../button";
import { useState } from "react";

const ManpowerList = () => {
  let [isOpen, setIsOpen] = useState(false);

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }
  const arr = [1, 2, 3];

  // // decide what to render
  // let content = null;

  // if (isLoading) {
  //   content = <p className="text-rose-500">Loading...</p>;
  // }

  // if (!isLoading && isError) {
  //   content = <p className="text-rose-500">That was an error !</p>;
  // }
  // if (!isLoading && !isError && projects.length === 0) {
  //   content = <p className="text-rose-500">No projects found!</p>;
  // }
  // if (!isLoading && !isError && projects.length > 0) {
  //   content = projects.map((project) => (
  //     <Manpower key={project.id} project={project} />
  //   ));
  // }

  return (
    <>
      <div className="">
        <div className="text-center mb-7">
          <Button className="btn-primary" onClick={openModal}>Add Manpower</Button>
        </div>
        <table className="table-auto border-collapse border border-slate-400 text-center">
          <thead className="bg-teal-800">
            <tr className="text-slate-100 text-sm md:text-lg">
              <TableTh className="md:w-48 w-auto">Projects</TableTh>
              <TableTh className="md:w-48 w-auto">Name</TableTh>
              <TableTh className="md:w-72 w-auto">Project Head</TableTh>
              <TableTh className="md:w-32 w-auto">Over Time</TableTh>
              <TableTh className="md:w-64 w-auto">Remarks</TableTh>
            </tr>
          </thead>
          <tbody className="rounded-xl">
            {arr.map((manpower, i) => (
              <Manpower
                key={i}
                manpower={manpower}
                isOpen={isOpen}
                setIsOpen={setIsOpen}
                openModal={openModal}
                closeModal={closeModal}
              />
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default ManpowerList;
