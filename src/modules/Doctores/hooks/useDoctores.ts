import React, { useEffect, useState } from "react"
import { useQuery } from '@tanstack/react-query'
import doctorsService from "../../../services/doctors.service"
import { useDoctoresStore } from "../store/doctoresStore"
import { DoctoresStore, FiltrosDoctor } from "../types"
import especialidadesService from "../../../services/especialidades.service"
import { Especialidad } from "@models/Especialidad"

export const useDoctores = () => {
  const [nombreDoctor, setNombreDoctor] = useState("")
  const [emailDoctor, setEmailDoctor] = useState("")
  const [especialidadDoctor, setEspecialidadDoctor] = useState("")
  const [disponibleDoctor, setDisponibleDoctor] = useState("")
  //
  const [especialidadesList, setEspecialidadesList] = useState<Array<{
    label: string;
    value: string;
  }>>([])
  const [visible, setVisible] = React.useState(false);
  const [filtros, setFiltros] = useState<FiltrosDoctor>({
    disponible: "",
    email: "",
    especialidad: "",
    nombre: "",
  });
  // 
  const doctores = useDoctoresStore((state: DoctoresStore) => state.doctores)
  const setDoctores = useDoctoresStore((state: DoctoresStore) => state.setDoctores)
  // 
  const showModal = () => setVisible(true);
  const hideModal = () => setVisible(false);

  const aplicarFiltros = () => {
    setNombreDoctor(filtros.nombre)
    setEmailDoctor(filtros.email)
    setEspecialidadDoctor(filtros.especialidad)
    setDisponibleDoctor(filtros.disponible)
  }

  const limpiarFiltros = () => {
    setNombreDoctor("")
    setEmailDoctor("")
    setEspecialidadDoctor("")
    setDisponibleDoctor("")

    setFiltros({
      nombre: '',
      especialidad: '',
      email: '',
      disponible: '',
    })
  }

  const {
    data: especialidadesData,
    status: especialidadesStatus,
  } = useQuery({
    queryKey: ['getEspecialidades'],
    queryFn: () => especialidadesService.getEspecialidades(),
    refetchOnWindowFocus: true,
    refetchOnReconnect: true,
  })

  const { data, status, isLoading, refetch, isFetching } = useQuery({
    queryKey: ['getDoctores', nombreDoctor, emailDoctor, especialidadDoctor, disponibleDoctor],
    queryFn: () => doctorsService.getDoctores(
      nombreDoctor,
      emailDoctor,
      especialidadDoctor,
      disponibleDoctor,
      true,
    ),
    refetchOnWindowFocus: true,
    refetchOnReconnect: true,
  })

  useEffect(() => {
    if (status === 'success') {
      setDoctores(data)
    }
  }, [status, data])

  useEffect(() => {
    if (especialidadesStatus === 'success') {
      const list = (especialidadesData as Especialidad[]).map((especialidad) => ({
        label: especialidad.nombre,
        value: especialidad.id.toString(),
      }))

      setEspecialidadesList(list)
    }
  }, [especialidadesStatus, especialidadesData])

  return {
    doctores,
    isLoading,
    refetch,
    isFetching,
    nombreDoctor,
    changeNombreDoctor: setNombreDoctor,
    visible,
    showModal,
    hideModal,
    especialidadesList,
    filtros,
    setFiltros,
    aplicarFiltros,
    limpiarFiltros,
  }
}
