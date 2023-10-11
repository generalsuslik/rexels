import './App.css';
import { Routes, Route } from "react-router-dom";

import Feed from './components/Feed/Feed';
import SignIn from './components/Auth/SignIn/SignIn';
import SignUp from './components/Auth/SignUp/SignUp';
import Layout from './common/Layout/Layout';

import './styles/style.css';


function App() {
  return (
    // <Layout>
      <Routes>
        <Route path='/' element={<Feed />}/>
        <Route path='/sign-in-up' element={<SignIn />} />
        <Route path='/sign-up' element={<SignUp />} />
      </Routes>
    // </Layout>
  );
}

export default App;
