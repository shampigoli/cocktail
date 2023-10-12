
import './App.css'
import About from './pages/About';
// import Coctail from './pages/coctail'
// import Test from './pages/test';
import {
  BrowserRouter,
  Route,
  Routes,
} from "react-router-dom";
// import Test from './pages/test';
// import Golo from './pages/yt';
// import Coctail from './pages/coctail';1
import Test from './pages/test';
// import Spotify from './pages/spotify';

function App() {

  return (
    <>
     <BrowserRouter>
      <Routes>
        <Route path="/" element={<Test/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/youtube" element={<Test />} />
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
