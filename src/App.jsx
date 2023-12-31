import { Provider } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { store } from "./app/store";
import Navbar from "./components/navbar/navbar";
import AddProject from "./pages/addProject";
import CraneUpdate from "./pages/craneUpdate";
import EditProject from "./pages/editProject";
import Home from "./pages/home";
import Layout from "./layout/layout";
import ManpowerDetails from "./pages/manpowerDetails";
import ProjectOverTimes from "./pages/projectOverTimes";
import OverTimeForm from "./components/overTime/overTimeForm";
import EditOverTimeForm from "./components/overTime/editOverTimeForm";

function App() {
  return (
    <>
      <Provider store={store}>
        <BrowserRouter>
          <Navbar />
          <Layout>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/add-form" element={<AddProject />} />
              <Route path="/crane-update" element={<CraneUpdate />} />
              <Route path="/manpower-site" element={<ManpowerDetails />} />
              <Route path="/over-time" element={<ProjectOverTimes />} />
              <Route path="/over-time-form" element={<OverTimeForm />} />
              <Route
                path="/edit-overtime/:overTimeId"
                element={<EditOverTimeForm />}
              />
              <Route
                path="/edit-project/:projectId"
                element={<EditProject />}
              />
            </Routes>
          </Layout>
        </BrowserRouter>
      </Provider>
    </>
  );
}

export default App;
