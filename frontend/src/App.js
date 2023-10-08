import logo from './logo.svg';
import './App.css';

import Navbar from './components/Navbar';
import Feed from './components/Feed';
import Footer from './components/Footer';

import './styles/style.css';


function App() {
  return (
    <div>
      <Navbar />
      <Feed />
      <br/>
      <Footer />
    </div>
  );
}

export default App;
