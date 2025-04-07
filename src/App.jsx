import React, { useEffect } from 'react';
import "./App.scss"
import { BrowserRouter, Routes, Route, useLocation, Navigate } from 'react-router-dom';

import Why from './components/Why/Why';
import How from "./components/How/How";
import What from "./components/What/What";
import Whatsnew from "./components/Whatsnew/Whatsnew";
import Signin from './components/Signin/Signin';
import Signup from "./components/Signup/Signup"
import { isLoggedIn } from './services/authService';
import { WeeklyDataProvider } from './contexts/WeeklyDataContext';

// Protected route component
const ProtectedRoute = ({ children }) => {
  if (!isLoggedIn()) {
    return <Navigate to="/signin" />;
  }
  return children;
};

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
            <Route path="/how" element={
              <ProtectedRoute>
                <WeeklyDataProvider>
                  <How />
                </WeeklyDataProvider>
              </ProtectedRoute>
            }> </Route>
            <Route path="/whats-new" element={<Whatsnew />}> </Route>
            <Route path="/signin" element={<Signin />}></Route>
            <Route path="/signup" element={<Signup />}></Route>
          </Routes>
        </div>
      </>
    </BrowserRouter>
  )
}

export default App