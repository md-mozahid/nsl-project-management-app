import { Provider } from 'react-redux'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { store } from './app/store'
import Navbar from './components/navbar/navbar'
import AddProject from './pages/addProject'
import CraneUpdate from './pages/craneUpdate'
import Home from './pages/home'

function App() {
  return (
    <>
      <Provider store={store}>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="add-form" element={<AddProject />} />
            <Route path="crane-update" element={<CraneUpdate />} />
          </Routes>
        </BrowserRouter>
      </Provider>
    </>
  )
}

export default App
