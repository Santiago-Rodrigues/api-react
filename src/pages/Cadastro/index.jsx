import { Link } from "react-router-dom"

const Cadastro = () => {
  return (
    <div className="max-w-md mx-auto mt-10 bg-white p-8 border border-gray-300 rounded-lg shadow-lg text-center">
      <h2 className="text-2xl font-bold mb-6  text-gray-800">
        Cadastro
      </h2>
      <form className="flex-col space-y-2">
        <input
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none"
          placeholder="Nome"
          type="text"
        />
        <input
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none"
          placeholder="E-mail"
          type="email"
        />
        <input
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none"
          placeholder="Senha"
          type="password"
        />
        <button className="w-full bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-400">
          Cadastrar
        </button>
      </form>
      <p className="p-2">
        Já tem uma conta?{" "}
        <Link className="underline text-blue-500" to="/login">
          Faça Login
        </Link>
      </p>
    </div>
  )
}
export default Cadastro
