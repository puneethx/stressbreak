import React from 'react'
import "./App.scss"
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Why from './components/Why/Why';
import How from "./components/How/How";
import What from "./components/What/What";
import Whatsnew from "./components/Whatsnew/Whatsnew";
import Signin from './components/Signin/Signin';


function App() {
  return (
    <BrowserRouter>
      <>
        <div className='main'>
          <Routes>
            <Route path="/" element={<What />}> </Route>
            <Route path='/what' element={<What />}> </Route>
            <Route path="/why" element={<Why />}> </Route>
            <Route path="/how" element={<How />}> </Route>
            <Route path="/whats-new" element={<Whatsnew />}> </Route>
            <Route path="/signin" element={<Signin/>}></Route>
          </Routes>
        </div>
      </>
    </BrowserRouter>
  )
}

export default App