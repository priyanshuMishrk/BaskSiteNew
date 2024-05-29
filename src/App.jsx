import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap.css';
import Enter from './Pages/Main';
import ScrollAnimation from './Pages/Demo';
import OurWork from './Pages/OurWork';
import ScrollToTop from './Components/Common/Scrolltop';
import SmoothScroll from './ntng';
import AboutUs from './Pages/AboutUs';
import { ThemeProvider } from '@mui/material/styles';
import theme from './Components/Common/Theme';
import './App.css';
import './Font.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Enter />} />
          <Route path="/stng" element={<SmoothScroll />} />
          <Route path="/l" element={<ScrollAnimation />} />
          <Route path="/work" element={<OurWork />} />
          <Route path="/about" element={<AboutUs />} />
        </Routes>
      </BrowserRouter>
      <ToastContainer />
    </ThemeProvider>
  );
}

export default App;
