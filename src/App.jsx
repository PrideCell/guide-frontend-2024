import './App.css';
import About from './shared/About';
import Slecetteammember from './components/Selectteammember';
import {Routes, Route} from 'react-router-dom';


import Loginnavbar from './shared/Loginnavbar';
import Login from './components/Login'
import Footer from './shared/Footer'
function App() {

  return (
    <div>
      <Loginnavbar />
    <Routes>
          <Route path="/" element={<Login />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/selectteammember" element={<Slecetteammember />}></Route>
    </Routes>
      <Footer />
    </div>
  )
}

export default App
