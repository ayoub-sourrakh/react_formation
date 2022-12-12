import React from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Navbar from "./components/Navbar"
import Produits from "./pages/Produits"
import './App.css'

const  App = () => {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Produits />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
