import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import What from './What/what';
import Why from './Why/why';

function App() {

  return (
    <BrowserRouter>
      <>
        <p>"Route changing"</p>
        <Routes>
          <Route path="/" element={<What/>}> </Route>
          <Route path='/what' element={<What />}> </Route>
          <Route path="/why" element={<Why />}> </Route>
        </Routes>
      </>
    </BrowserRouter>
  )
}

export default App
