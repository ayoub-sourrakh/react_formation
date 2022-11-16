import React from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Navbar from "./components/Layout/Navbar"
import Ajax from "./pages/Ajax"
import Bitcoin from "./pages/Bitcoin"
import Home from "./pages/Home"
import Meteo from "./pages/Meteo"
import Movies from "./pages/Movies"
import ReactHookForm from "./pages/ReactHookForm"

const App = () => {
  return (
  <>
    <BrowserRouter>
      <Navbar />
      <Routes>
       <Route path="/" element={<Home />} />
       <Route path="/movies" element={<Movies />} />
       <Route path="/reacthookform" element={<ReactHookForm />}></Route>
       <Route path="/ajax" element={<Ajax />} ></Route>
       <Route path="/bitcoin" element={<Bitcoin />} ></Route>
       <Route path="/meteo" element={<Meteo />}></Route>
      </Routes>
    </BrowserRouter>
  </>
  )
}

export default App
