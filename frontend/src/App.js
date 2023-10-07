import logo from './logo.svg';
import './App.css';

import Navbar from './components/Navbar';
import Feed from './components/Feed';
import Green from './components/Green';
import Footer from './components/Footer';

import './styles/style.css';
import './styles/feed.css';
import './styles/navbar.css';


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
