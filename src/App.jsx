import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import BarraNav from "./Components/BarraNav";
import Buscador from "./Components/Buscador";
import DetailPelicula from "./Components/DetailPelicula";
import Footer from "./Components/Footer";
import Lista from "./Components/Lista";

function App() {

  const [filtro, setFiltro] = useState("")
  const [seleccion, setSeleccion] = useState()



  return (
    <>
        <BrowserRouter>
          <BarraNav />
          <Buscador setFiltro={setFiltro} />
          <Routes>
            <Route exact path="/" element={<Lista filtro={filtro} setSeleccion={setSeleccion} />} />
            <Route path="/:id" element={<DetailPelicula seleccion={seleccion}/>} />
          </Routes>
          <Footer />
        </BrowserRouter>
    </>
  );
}

export default App;
