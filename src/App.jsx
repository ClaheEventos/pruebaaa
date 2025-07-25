import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React from "react";

import Clientes from "./page/cliente.jsx";
import Plan from "./page/plan.jsx";
import PrimerPlato from "./components/PrimerPlato.jsx";
import IslasPremiun from "./components/IslasPremiun.jsx";
import PlatoInfantil from "./components/PlatoInfantil.jsx";
import PlatosCombinados from "./components/PlatosCombinados.jsx";
import Postres from "./components/Postres.jsx";
import MesaDulce from "./components/MesaDulce.jsx";
import ExtrasLeciocion from "./components/ExtrasLeciocion.jsx";
import ShowElecion from "./components/ShowElecion.jsx";
import FinDeFiesta from "./components/FinDeFiesta.jsx";
import Navbar from "./components/Navbar.jsx";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        {/* Ruta principal al entrar al sitio */}
        <Route path="/" element={<Clientes />} />
        
        {/* Resto de rutas */}
        <Route path="/Clientes" element={<Clientes />} />
        <Route path="/Plan" element={<Plan />} />
        <Route path="/PrimerPlato" element={<PrimerPlato />} />
        <Route path="/IslasPremiun" element={<IslasPremiun />} />
        <Route path="/PlatoInfantil" element={<PlatoInfantil />} />
        <Route path="/PlatoPrincipal" element={<PlatosCombinados />} />
        <Route path="/Postres" element={<Postres />} />
        <Route path="/MesaDulce" element={<MesaDulce />} />
        <Route path="/ExtrasLeciocion" element={<ExtrasLeciocion />} />
        <Route path="/ShowElecion" element={<ShowElecion />} />
        <Route path="/FinDeFiesta" element={<FinDeFiesta />} />
      </Routes>
    </Router>
  );
}

export default App;