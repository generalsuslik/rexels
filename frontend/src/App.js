import './App.css';
import { Routes, Route } from "react-router-dom";

import Navbar from './components/Navbar';
import Feed from './components/Feed';
import Footer from './components/Footer';

import './styles/style.css';


function App() {
  return (
    <div>
        <Navbar />
        <Routes>
          <Route path='/' element={<Feed />} />
        </Routes>
        <br/>
        <Footer />
    </div>
  );
}

export default App;
