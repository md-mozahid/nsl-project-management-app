const TableTh = ({ children, className, ...rest }) => {
  return (
    <>
      <th className={`border border-slate-400 py-1 ${className}`} {...rest}>
        {children}
      </th>
    </>
  );
};

export default TableTh;
