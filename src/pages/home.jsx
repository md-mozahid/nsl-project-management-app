import ProjectsList from '../components/projectsList'

const Home = () => {
  return (
    <>
      <div className="">
        <h1 className="text-center md:text-4xl font-bold md:py-10 py-5 uppercase">
          Project List
        </h1>
        <div className="flex justify-center">
          <ProjectsList />
        </div>
      </div>
    </>
  )
}

export default Home
