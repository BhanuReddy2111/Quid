import './App.css'
import PrivateLimited from './components/PrivateLimited/privateLimited'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { UploadScreen } from './components/SecondScreen/UploadScreen';
import UseStateImplement from './components/Hooks/UseStateImplement';
import UseEffectImplement from './components/Hooks/UseEffectImplement';
import UseCallbackImplement from './components/Hooks/UseCallbackImplement';
import UseParamsImplementation from './components/Hooks/UseParamsImplementation';
import CustomHookImplement from './components/Hooks/CustomHook/CustomHookImplement';

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<PrivateLimited />}/>
          <Route path='/uploadMoA' element={<UploadScreen  />}/>
          <Route path='/usestate' element={<UseStateImplement/>}/>
          <Route path='/useeffect' element={<UseEffectImplement/>}/>
          <Route path='/usecallback' element={<UseCallbackImplement/>}/>
          <Route path='/useparams/:userId' element={<UseParamsImplementation />}/>
          <Route path='/customhook' element={<CustomHookImplement />}/>
          <Route path='*' element={<>404 Error Not Found</>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
