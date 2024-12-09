import React from "react";
import './app.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Login from "./components/auth/Login.jsx";
import PagePerfil from "./pages/PagePerfil.jsx";
import Register from "./components/auth/Register.jsx";
import ProtectedRoute from "./components/ProtectedRoute"; // Importando o componente de rota protegida

function App() {
  return (
    <Router>
      <div>
        <Routes>
          {/* Rota pública */}
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />

          {/* Rotas protegidas */}
          <Route
            path="/"
            element={
              <ProtectedRoute>
                <Home />
              </ProtectedRoute>
            }
          />
          <Route
            path="/profile/:username"
            element={
              <ProtectedRoute>
                <PagePerfil />
              </ProtectedRoute>
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
