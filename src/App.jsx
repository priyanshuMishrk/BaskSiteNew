import './App.css';
import './Font.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap.css';
import Enter from './Pages/Main';
import ScrollAnimation from './Pages/Demo';
import OurWork from './Pages/OurWork';

function App() {
  return (
    <>
      <BrowserRouter>
            <Routes>
              {/* <Route path="/" element={<Home />} /> */}
              <Route path="/" element={<Enter />} />
              <Route path='/l' element={<ScrollAnimation/>} />
              <Route path='work' element={<OurWork />}/>
            </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
