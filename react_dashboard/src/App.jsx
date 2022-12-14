import { BrowserRouter, Routes, Route } from "react-router-dom"
import Dashboard from "./layout/Dashboard"
import Home from "./pages/Home"

const App = () => {

  return (
    <BrowserRouter >
      <Routes>
        <Route path='/' element={<Dashboard />}>
          <Route index element={<Home />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
