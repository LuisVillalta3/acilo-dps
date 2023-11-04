import { Horario } from "../models/horario"

export const sortHorariosByDays = (horarios: Horario[]) => {
  return horarios.sort((a, b) => {
    if (a.dia < b.dia) return -1;
    if (a.dia > b.dia) return 1;
    return 0;
  })
}