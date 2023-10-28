import AsyncStorage from "@react-native-async-storage/async-storage";
import { create } from 'zustand'
import { createJSONStorage, persist } from 'zustand/middleware'
import { DoctoresStore } from "../types";

export const useDoctoresStore = create<DoctoresStore>(
  (set, get) => ({
    doctores: [],
    setDoctores: (doctores: any[]) => set({ doctores }),
    especialidades: [],
    setEspecialidades: (especialidades: any[]) => set({ especialidades }),
  })
)
