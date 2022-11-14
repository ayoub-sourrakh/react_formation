import React from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Navbar from "./components/Layout/Navbar"
import Home from "./pages/Home"
import Movies from "./pages/Movies"

const App = () => {
  return (
  <>
    <BrowserRouter>
      <Navbar />
      <Routes>
       <Route path="/" element={<Home />} />
       <Route path="/movies" element={<Movies />} />
      </Routes>
    </BrowserRouter>
  </>
  )
}

export default App
