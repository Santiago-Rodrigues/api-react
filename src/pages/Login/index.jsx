import { useRef } from "react"
import { Link, useNavigate } from "react-router-dom"
import api from "../../services/api.js"

const Login = () => {
  const email = useRef()
  const password = useRef()

  const nav = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault()

    try {
      const data = await api.post("/login", {
        email: email.current.value,
        password: password.current.value,
      })
      const token = data.data.token
      localStorage.setItem("token", token)

      nav("/todos")
    } catch (error) {
      alert("Dados incorretos")
      console.error("Erro ao logar", error)
    }
  }

  return (
    <div className="max-w-md mx-auto mt-10 bg-white p-8 border border-gray-300 rounded-lg shadow-lg text-center">
      <h2 className="text-2xl font-bold mb-6  text-gray-800">Cadastro</h2>
      <form className="flex-col space-y-2" onSubmit={handleSubmit}>
        <input
          ref={email}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none"
          placeholder="E-mail"
          type="email"
        />
        <input
          ref={password}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none"
          placeholder="Senha"
          type="password"
        />
        <button className="w-full bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-400">
          Login
        </button>
      </form>
      <p className="p-2">
        Não tem uma conta?{" "}
        <Link className="underline text-blue-500" to="/">
          Faça seu cadastro!
        </Link>
      </p>
    </div>
  )
}
export default Login
