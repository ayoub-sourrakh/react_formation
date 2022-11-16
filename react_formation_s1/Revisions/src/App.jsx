import React from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Navbar from "./components/Navbar/Navbar"
import Home from './pages/Home'
import Contact from './pages/Contact'
import ArrayState from "./pages/ArrayState"
import Form from "./pages/Form"
import FormExercice from "./pages/FormExercice"
import LifeCycle from "./pages/LifeCycle"

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/arraystate" element={<ArrayState />} />
          <Route path="/form" element={<Form/>}></Route>
          <Route path="/formexercice" element={<FormExercice />}></Route>
          <Route path="/lifecycle" element={<LifeCycle />}></Route>
        </Routes>
      </BrowserRouter>
      
  </>
  )
}

export default App
