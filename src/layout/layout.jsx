const Layout = ({ children }) => {
  return (
    <>
      <div className="container mx-auto px-5 min-w-fit">
        <div className="">{children}</div>
      </div>
    </>
  )
};

export default Layout;
