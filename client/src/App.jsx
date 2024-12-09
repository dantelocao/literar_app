import React, { useContext } from "react";
import './app.css';
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Login from "./components/auth/Login.jsx";
import PagePerfil from "./pages/PagePerfil.jsx";
import Register from "./components/auth/Register.jsx";
import { AuthContext } from "./context/authContext.jsx";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import Books from "./pages/Books.jsx";

function App() {
  const { user } = useContext(AuthContext)

  return (
    <>
    <ToastContainer />
    <Router>
      <div>
        <Routes>

          <Route path="/books" element={<Books />} />

          <Route path="/" element={ user ? <Home /> :  <Register /> } />
          <Route path="/profile/:username" element={<PagePerfil />} />

          <Route path="/register" element={user ? <Navigate to={"/"}/> : <Register />} />
          <Route path="/login" element={ user ? <Navigate to={"/"}/> : <Login />} />


        </Routes>
      </div>
    </Router>
    </>
  );
}

export default App;
