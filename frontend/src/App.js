import logo from './logo.svg';
import './App.css';

import Navbar from './components/Navbar';
import Feed from './components/Feed';
import Green from './components/Green';

import './styles/style.css';
import './styles/feed.css';
import './styles/navbar.css';


function App() {
  return (
    <div>
      <Navbar />
      <Feed />
      {/* <Green /> */}
    </div>
  );
}

export default App;
