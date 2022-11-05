import './App.css';
import { BrowserRouter,Routes, Route } from 'react-router-dom';
import QuickSigIn from './Components/QuickSigIn/QuickSigIn';
import LoginPage from './Pages/LoginPage/LoginPage';
import RegistrationPage from './Pages/RegistrationPage/RegistrationPage';
import Password from './Pages/Password/Password';
import OTP from './Pages/OTP/OTP';


function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route exact path='/' element={<HomePage/>} ></Route>
          <Route exact path='/login' element={<LoginPage/>} ></Route>
          <Route exact path='/registration' element={<RegistrationPage/>} ></Route>
          <Route exact path='/password' element={<Password/>} ></Route>
          <Route exact path='/otp' element={<OTP/>} ></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
