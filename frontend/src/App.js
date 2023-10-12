import './App.css';
import { Routes, Route } from "react-router-dom";

import Feed from './components/Feed/Feed';
import SignIn from './components/Auth/SignIn/SignIn';
import SignUp from './components/Auth/SignUp/SignUp';

import './styles/style.css';


function App() {
  return (
    <Routes>
      <Route path='/' element={<Feed />}/>
      <Route path='/sign-in-up' element={<SignIn />} />
      <Route path='/sign-up' element={<SignUp />} />
    </Routes>
  );
}

export default App;
