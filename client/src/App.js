import { Routes, Route } from "react-router-dom";

import Feed from './components/Feed/Feed';
import SignIn from './components/Auth/SignIn/SignIn';
import SignUp from './components/Auth/SignUp/SignUp';
import { Profile } from './components/Profile/Profile';
import { UploadForm } from './components/Upload/UploadForm';

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
      <Route path='/upload' element={<UploadForm />} />
    </Routes>
  );
}

export default App;
