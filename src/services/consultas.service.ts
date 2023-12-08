import { apiClient } from "../utils/ApiClient"
import { GetConsultasProps, ReagendarConsultaProps } from "./types"

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

const cancelarConsulta = async (id: string | number) => {
  const response = await apiClient.delete(`${CONSULTAS_URI}/${id}`)

  return response.data
}

const reagendarConsulta = async (id: string | number, data: ReagendarConsultaProps) => {
  const response = await apiClient.put(`${CONSULTAS_URI}/reagendar/${id}`, data)

  return response.data
}

const iniciarConsulta = async (id: string | number) => {
  const response = await apiClient.put(`${CONSULTAS_URI}/comenzar-cita/${id}`)

  return response.data
}

export default {
  getConsultas,
  cancelarConsulta,
  reagendarConsulta,
  iniciarConsulta,
}
