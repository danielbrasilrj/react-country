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
import {CapitalPage} from "./pages/CapitalPage";
import {CountryPage} from "./pages/CountryPage";

function App() {

    return (
      <Router>
          <div>
              <nav>
                  <ul>
                      <li style={{ padding: '10px' }}>
                          <Link to="/">Home</Link>
                      </li>
                      <li style={{ padding: '10px' }}>
                          <Link to="/about">About</Link>
                      </li>
                  </ul>
              </nav>

              <Routes>
                  <Route path="/" element={
                      <Home />
                  }>
                  </Route>
                  <Route path="/capital" element={
                      <CapitalPage />
                  }>
                  </Route>
                  <Route path="/country" element={
                      <CountryPage />
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
