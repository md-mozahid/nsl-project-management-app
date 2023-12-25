const CraneSchedule = () => {
  return (
    <>
      <div className="container mx-auto flex justify-center">
        <table className="border-collapse border border-slate-500 text-center">
          <thead>
            <tr className="text-rose-400 md:text-xl">
              <th className="border border-slate-600 px-10">Crane Capacity</th>
              <th className="border border-slate-600 px-10">Nos</th>
              <th className="border border-slate-600 px-5">Project</th>
              <th className="border border-slate-600 px-5">Operator</th>
              <th className="border border-slate-600 px-5">Working Time</th>
              <th className="border border-slate-600 px-5">Break</th>
              <th className="border border-slate-600 px-5">Over Time</th>
              <th className="border border-slate-600 px-16">Off Day</th>
              <th className="border border-slate-600 px-6">Remarks</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-slate-600 ">
                <p>10 Ton</p>
              </td>
              <td className="border border-slate-600 w-20">
                <p>1</p>
              </td>
              <td className="border border-slate-600 ">
                <p>Bridhara</p>
              </td>
              <td className="border border-slate-600 ">
                <p>Hridoy</p>
              </td>
              <td className="border border-slate-600 ">
                <p>8am - 5pm</p>
              </td>
              <td className="border border-slate-600 ">
                <p>1hr</p>
              </td>
              <td className="border border-slate-600 ">
                <p>2hr</p>
              </td>
              <td className="border border-slate-600 ">
                <p>2-Friday (In a month)</p>
              </td>
              <td className="border border-slate-600 ">
                <p>remarks</p>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
};

export default CraneSchedule;
