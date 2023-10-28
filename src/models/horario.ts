import { Timestamps } from "./timestamps";

export interface Horario extends Timestamps {
  id:  number;
  dia: number;
  inicio: Date;
  fin: Date;
  idDoctor: number;
}