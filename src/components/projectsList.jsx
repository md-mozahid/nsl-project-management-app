const ProjectsList = () => {
  return (
    <>
      <div className="container mx-auto flex justify-center">
        <table className="border-collapse border border-slate-500 text-center">
          <thead>
            <tr className="text-rose-400 md:text-xl">
              <th className="border border-slate-600 px-10" rowSpan="2">
                Projects
              </th>
              <th className="border border-slate-600 px-10" colSpan="2">
                Manpower
              </th>
              <th className="border border-slate-600 px-5" rowSpan="2">
                Head
              </th>
              <th className="border border-slate-600 px-5" rowSpan="2">
                Working Time
              </th>
              <th className="border border-slate-600 px-5" rowSpan="2">
                Break
              </th>
              <th className="border border-slate-600 px-5" rowSpan="2">
                Over Time
              </th>
              <th className="border border-slate-600 px-16" rowSpan="2">
                Off Day
              </th>
              <th className="border border-slate-600 px-6" rowSpan="2">
                Remarks
              </th>
            </tr>
            <tr className="md:text-xl text-rose-400">
              <th className="border-r">Site</th>
              <th>Factory</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-slate-600 ">
                <p>Baridhara (KSBL)</p>
              </td>
              <td className="border border-slate-600 w-20">
                <p>13</p>
              </td>
              <td className="border border-slate-600 ">
                <p>2</p>
              </td>
              <td className="border border-slate-600 ">
                <p>Sujon</p>
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

export default ProjectsList;
