import './App.css';
import QuickSigIn from './Components/QuickSigIn/QuickSigIn';
import LoginPage from './Pages/LoginPage/LoginPage';
import { BrowserRouter,Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route exact path='/' element={<LoginPage/>}/>
        </Routes>
      </BrowserRouter>

    </>
  );
}


export default App;