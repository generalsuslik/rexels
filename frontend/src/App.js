import './App.css';
import { Routes, Route, Navigate } from "react-router-dom";
import { useEffect } from 'react';

import Feed from './components/Feed/Feed';
import SignIn from './components/Auth/SignIn/SignIn';
import SignUp from './components/Auth/SignUp/SignUp';
import { Profile } from './components/Profile/Profile';

import { Slider } from './common/Slider/Slider';

import './styles/style.css';


function App() {

  return (
    <Routes>
      <Route path='/' element={<Feed />}/>
      <Route path='/sign-in' element={<SignIn />} />
      <Route path='/sign-up' element={<SignUp />} />
      <Route path='/users'>
        <Route path=':profileSlug/' element={<Profile />} />
      </Route>
    </Routes>
  //   <Slider data={[
  //     {url: '../../images/mountain_dawn.avif'},
  //     {url: '../../images/sunset1.avif'},
  //     {url: '../../images/green.jpg'},
  //     {url: '../../images/mountain_night.jpg'}
  // ]} />
  );
}

export default App;
