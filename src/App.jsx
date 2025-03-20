import React, { useEffect } from 'react';
import "./App.scss"
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';

import Why from './components/Why/Why';
import How from "./components/How/How";
import What from "./components/What/What";
import Whatsnew from "./components/Whatsnew/Whatsnew";
import Signin from './components/Signin/Signin';


function App() {
  function ScrollToTop() {
    const { pathname } = useLocation();

    useEffect(() => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    }, [pathname]);

    return null;
  }
  return (
    <BrowserRouter>
      <>
        <ScrollToTop />
        <div className='main'>
          <Routes>
            <Route path="/" element={<What />}> </Route>
            <Route path='/what' element={<What />}> </Route>
            <Route path="/why" element={<Why />}> </Route>
            <Route path="/how" element={<How />}> </Route>
            <Route path="/whats-new" element={<Whatsnew />}> </Route>
            <Route path="/signin" element={<Signin />}></Route>
          </Routes>
        </div>
      </>
    </BrowserRouter>
  )
}

export default App