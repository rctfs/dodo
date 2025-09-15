import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import { ThemeProvider } from "@mui/material/styles";
import Cronologia from "./pages/cronologia/Cronologia";
import theme from "./Theme";
import Festivais from "./pages/festivais/Festivais";
import Direcao from "./pages/direcao/Direcao";
import Ensaios from "./pages/ensaios/Ensaios";

function App() {
    return (
        <ThemeProvider theme={theme}>
            <Router>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/cronologia" element={<Cronologia />} />
                    <Route path="/festivais" element={<Festivais />} />
                    <Route path="/direcao" element={<Direcao />} />
                    <Route path="/ensaios" element={<Ensaios />} />
                </Routes>
            </Router>
        </ThemeProvider>
    );
}

export default App;
