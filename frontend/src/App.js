import './App.css';
import { Routes, Route } from "react-router-dom";

import Feed from './components/Feed';
import Login from './components/Login';
import LogOut from './components/LogOut';

import './styles/style.css';


function App() {
  return (
    <div>
        {/* <Navbar /> */}
        <Routes>
          <Route path='/' element={<Feed />}/>
          <Route path='/log-in' element={<Login />} />
          <Route path='/log-out' element={<LogOut />} />
        </Routes>
    </div>
  );
}

export default App;
