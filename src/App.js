import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import { ThemeProvider } from "@mui/material/styles";
import Cronologia from "./pages/cronologia/Cronologia";
import theme from "./Theme";
import Direcao from "./pages/direcao/Direcao";
import Ensaios from "./pages/ensaios/Ensaios";
import Testemunhos from "./pages/testemunhos/Testemunhos";
import FotosSoltas from "./pages/fotosSoltas/FotosSoltas";

function App() {
    return (
        <ThemeProvider theme={theme}>
            <Router>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/cronologia" element={<Cronologia />} />
                    <Route path="/direcao" element={<Direcao />} />
                    <Route path="/ensaios" element={<Ensaios />} />
                    <Route path="/testemunhos" element={<Testemunhos />} />
                    <Route path="/fotosSoltas" element={<FotosSoltas />} />
                </Routes>
            </Router>
        </ThemeProvider>
    );
}

export default App;
