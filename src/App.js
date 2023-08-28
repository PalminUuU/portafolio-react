import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import NotFound from "./pages/NotFound";
import Gato from "./pages/Gato";


export default function App() {
  return (
    <BrowserRouter>
      <Routes>
      <Route path="/" element={<HomePage/>}/>
      <Route path="/about" element={<AboutPage/>}/>
      <Route path="/gato" element={<Gato/>}/>
      <Route path="*" element={<NotFound/>} />
      </Routes>
    </BrowserRouter>
  );
}
