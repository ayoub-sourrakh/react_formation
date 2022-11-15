import React from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Navbar from "./components/Layout/Navbar"
import Home from "./pages/Home"
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
       <Route path='/reacthookform' element={<ReactHookForm />}></Route>
      </Routes>
    </BrowserRouter>
  </>
  )
}

export default App
