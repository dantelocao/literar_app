import React from 'react';
import './app.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home.jsx';
import Login from './components/auth/Login.jsx';
import PagePerfil from './pages/pagePerfil.jsx';
>>>>>>> 9d3c899bacb6c2a309d50d346826e1fb53a5d844
import Register from './components/auth/Register.jsx';

function App() {
  return (
    <Router>
      <div>
        {/* Definindo as rotas */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/profile/:username" element={<PagePerfil />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
