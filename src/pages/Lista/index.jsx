import { useEffect, useState } from "react"
import api from "../../services/api.js"

const ListarUsuarios = () => {
  const [allUsers, setAllUsers] = useState([])

  useEffect(() => {
    const loadUsers = async () => {
      const token = localStorage.getItem("token")
      const { data: data } = await api.get("/usuarios/todos", {
        headers: { Authorization: `Bearer ${token}` },
      })
      setAllUsers(data)
    }
    loadUsers()
  }, [])

  return (
    <div className="max-w-2xl mx-auto mt-10 bg-white p-8 border border-gray-300 rounded-md shadow-lg">
        <h2 className="text-2xl font-bold mb-6 text-center text-gray-900">Lista de Usuários</h2>
        <ul className="space-y-2">
            {allUsers.length > 0 && allUsers.map((user) => (
                <li key={user.email} className="bg-gray-300 p-4 rounded=md">
                    <p className="font-semibold">Nome: {user.name}</p>
                    <p className="font-semibold">E-mail: {user.email}</p>
                    <p className="font-semibold">Senha: {user.password}</p>
                </li>
            ))}
        </ul>
    </div>
)
}

export default ListarUsuarios
