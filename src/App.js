import './App.css';
import Navbar from './components/Navbar';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from './pages/Home';
import Info from './pages/Info';
import Games from './pages/Games';
import Future from './pages/Future';
import Support from './pages/Support';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/info" element={<Info />} />
          <Route path="/games" element={<Games />} />
          <Route path="/future" element={<Future />} />
          <Route path="/support" element={<Support />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
