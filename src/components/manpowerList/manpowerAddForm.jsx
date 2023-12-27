import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Label from "../label";
import Button from "../button";
import { Dialog, Transition } from "@headlessui/react";
import { Fragment } from "react";

const AddManpower = ({ isOpen, closeModal, manpower }) => {
  const [manpowerName, setManpowerName] = useState("");
  const [overTime, setOverTime] = useState("");
  const [remarks, setRemarks] = useState("");

  const navigate = useNavigate();

  // reset input value
  const resetForm = () => {
    setManpowerName("");
    setOverTime("");
    setRemarks("");
  };

  // handle add project
  const handleAddManpower = (e) => {
    e.preventDefault();

    //     addProject({
    //       manpowerName,
    //       overTime,
    //       remarks,
    //     });
    //     resetForm();
    //     navigate("/");
    //
  };

  return (
    <>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black/25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-96 md:w-[400px]  md:max-w-lg transform overflow-hidden rounded-2xl bg-slate-700 p-6 align-middle shadow-xl transition-all">
                  <Dialog.Title
                    as="h3"
                    className="text-xl font-medium leading-6"
                  >
                    {/* Player Details */}
                  </Dialog.Title>

                  <div className="">
                    <h2 className="md:text-2xl uppercase text-center mb-5">
                      Add Manpower
                    </h2>
                    <form onSubmit={handleAddManpower}>
                      <div className="border border-[#111827] p-5 rounded-lg text-left">
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

                        <div className="">
                          <Label>Over Time</Label>
                          <input
                            type="text"
                            placeholder="Over time (ex. 1hr or 1.30hr)"
                            className="inputElm"
                            value={overTime}
                            onChange={(e) => setOverTime(e.target.value)}
                          />
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
                        <Button className="btn-primary btn-fw">
                          Add Manpower
                        </Button>
                      </div>
                    </form>
                  </div>

                  <div className="mt-4">
                    <button
                      type="button"
                      className="bg-rose-500 rounded-full hover:bg-rose-800 px-4 py-2 text-sm md:text-base font-medium outline-none"
                      onClick={closeModal}
                    >
                      Cancel
                    </button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
};

export default AddManpower;
