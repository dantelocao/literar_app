import React from 'react';
import './app.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import PagePerfil from './pages/PagePerfil.jsx'
import Home from './pages/Home.jsx';

function App() {
  return (
    <Router>
      <div>
        {/* Definindo as rotas */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/profile" element={<PagePerfil />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
