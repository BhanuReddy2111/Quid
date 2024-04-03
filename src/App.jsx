import './App.css'
import PrivateLimited from './components/PrivateLimited/privateLimited'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { UploadScreen } from './components/SecondScreen/UploadScreen';

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<PrivateLimited />}/>
          <Route path='/uploadMoA' element={<UploadScreen  />}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
