import { useEffect } from "react"
import api from "../../services/api.js"

const ListarUsuarios = () => {
  useEffect(() => {
    const loadUsers = async () => {
      const response = await api.get("/usuarios/todos")
    }
    loadUsers()
  }, [])

  return <h2>Listar</h2>
}

export default ListarUsuarios
