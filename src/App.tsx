import React from 'react';
import './App.css';
import {Home} from "./pages/Home";
import {
    BrowserRouter as Router,
    Routes,
    Route,
    useNavigation,
    Link
} from "react-router-dom";
import About from "./pages/About";

function App() {

    return (
      <Router>
          <div>
              <nav>
                  <ul>
                      <li>
                          <Link to="/">Home</Link>
                      </li>
                      <li>
                          <Link to="/about">About</Link>
                      </li>
                  </ul>
              </nav>

              <Routes>
                  <Route path="/" element={
                      <Home />
                  }>
                  </Route>
                  <Route path="/about" element={
                      <About />
                  }>
                  </Route>
              </Routes>
          </div>
      </Router>
  );
}

export default App;
