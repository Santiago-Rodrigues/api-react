
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom"
import Cadastro from "./pages/Cadastro/index.jsx"
import Login from "./pages/Login/index.jsx"
import Todos from "./pages/Lista/index.jsx"

function App() {

  return (
    <BrowserRouter>
    <header className="bg-blue-500 text-white p-4 shadow-md">
    <h1 className="text-2xl font-bold text-center">
      Sistema de Cadastro de usuários
    </h1>
    </header>
      <Routes>
        <Route path="/" element={<Cadastro/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/todos" element={<Todos/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
