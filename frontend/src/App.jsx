import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Livros from './pages/Livros';
import Perfil from './pages/Perfil';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="livros" element={<Livros />} />
          <Route path="perfil" element={<Perfil />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
