import { apiClient } from "../utils/ApiClient"

const getDoctores = async (
  name?: string,
  email?: string,
  especialidad?: string,
  disponible?: string,
  includeEspecialidad?: boolean,
) => {
  const query = []

  if (name) {
    query.push(`name=${name}`)
  }

  if (email) {
    query.push(`email=${email}`)
  }

  if (especialidad) {
    query.push(`especialidad=${especialidad}`)
  }

  if (disponible) {
    query.push(`disponible=${disponible}`)
  }

  if (includeEspecialidad) {
    query.push('includeEspecialidad=true')
  }

  const response = await apiClient.get(`/doctors?${query.join('&')}`)

  return response.data
}

export default {
  getDoctores
}
