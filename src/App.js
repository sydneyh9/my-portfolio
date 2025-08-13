import React from 'react';
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';

import Home from './pages/Home';
import About from './pages/About';
import Games from './pages/Games';
import './App.css';

function App() {
  return (
    <Router>
    <div className="App">
      <nav style={{ padding: "1rem", backgroundColor: "#282c34" }}>
        <Link to ="/" style= {{ color: "white", marginRight: "1rem" }}> Home </Link>
        <Link to="/about" style= {{ color: "white" }} > About </Link>
        <Link to="/games" style= {{ color: "white", marginLeft: "1rem" }} > Games </Link>
      </nav>
          <Routes>
            <Route path="/" element={<Home /> } />
            <Route path="/about" element={<About />} />
            <Route path="/games" element={<Games />} />
          </Routes>
    </div>
    </Router>
  );
}

export default App;
