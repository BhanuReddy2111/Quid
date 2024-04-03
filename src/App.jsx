import './App.css'
import PrivateLimited from './components/PrivateLimited/privateLimited'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { UploadScreen } from './components/SecondScreen/UploadScreen';
import UseStateImplement from './components/Hooks/UseStateImplement';
import UseEffectImplement from './components/Hooks/UseEffectImplement';

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<PrivateLimited />}/>
          <Route path='/uploadMoA' element={<UploadScreen  />}/>
          <Route path='/usestate' element={<UseStateImplement/>}/>
          <Route path='/useeffect' element={<UseEffectImplement/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
