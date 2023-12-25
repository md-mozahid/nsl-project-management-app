import ProjectsList from "../components/projectsList";

const Home = () => {
  return (
    <>
      <div className="container">
        <h1 className="text-center md:text-4xl font-bold md:py-10 uppercase">
          Project List
        </h1>
        <ProjectsList />
      </div>
    </>
  );
};

export default Home;
