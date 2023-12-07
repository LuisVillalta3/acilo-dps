import { apiClient } from "../utils/ApiClient"
import { GetConsultasProps } from "./types"

const CONSULTAS_URI = '/consultas'

const getConsultas = async ({
  includeDoctor,
  includePaciente,
  includeEspecialidad,
  includeTipoConsulta,
  limit,
  proximasCitas,
  status,
}: GetConsultasProps) => {
  const query = []

  if (includeDoctor) {
    query.push('includeDoctor=true')
  }

  if (includePaciente) {
    query.push('includePaciente=true')
  }

  if (includeEspecialidad) {
    query.push('includeEspecialidad=true')
  }

  if (includeTipoConsulta) {
    query.push('includeTipoConsulta=true')
  }

  if (limit) {
    query.push(`limit=${limit}`)
  }

  if (proximasCitas) {
    query.push('proximasCitas=true')
  }
  
  if (status) {
    query.push(`status=${status}`)
  }

  const response = await apiClient.get(`${CONSULTAS_URI}?${query.join('&')}`)

  return response.data
}

export default {
  getConsultas,
}
