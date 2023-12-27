import { Link } from "react-router-dom";
import TableTd from ".././td";
import AddManpower from "./manpowerAddForm";
import { useState } from "react";
import { BsBoxArrowUpRight } from "react-icons/bs";

const Manpower = ({ manpower, isOpen, setIsOpen, closeModal, openModal }) => {
  // let [isOpen, setIsOpen] = useState(false);

  // function closeModal() {
  //   setIsOpen(false);
  // }

  // function openModal() {
  //   setIsOpen(true);
  // }

  return (
    <>
      <tr className="bg-slate-600 even:bg-slate-700 hover:bg-slate-800">
        <TableTd>
          <p>1</p>
        </TableTd>
        <TableTd>
          <p>2</p>
        </TableTd>
        <TableTd>
          <p>3</p>
        </TableTd>
        <TableTd>
          <p>4</p>
        </TableTd>
        <TableTd>
          <p>5</p>
        </TableTd>
      </tr>

      <AddManpower
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        closeModal={closeModal}
        manpower={manpower}
      />
    </>
  );
};

export default Manpower;
