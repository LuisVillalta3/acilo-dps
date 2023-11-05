import { useQuery } from "@tanstack/react-query"
import pacientesService from "@services/pacientes.service"
import { useEffect, useState } from "react";
import { PacienteRouteProps, PacienteScreenNavigation } from "../types";
import { RouteProp, useNavigation, useRoute, useTheme } from "@react-navigation/native";
import { Paciente } from "@models/paciente";

export const usePaciente = () => {
  const route = useRoute<RouteProp<PacienteRouteProps>>();
  const navigation = useNavigation<PacienteScreenNavigation>();
  const [id, setId] = useState<string>("");
  const [paciente, setPaciente] = useState<Paciente>();
  const { colors } = useTheme();

  useEffect(() => {
    if (route.params === undefined) return;
    const { pacienteID } = route.params;
    if (pacienteID === undefined) return navigation.navigate("PacientesScreen");
    setId(pacienteID);
  }, [route]);

  const { data, status, isLoading, refetch, isFetching } = useQuery({
    queryKey: ['getPaciente', id],
    queryFn: () => pacientesService.getPaciente(id),
    refetchOnWindowFocus: true,
    refetchOnReconnect: true,
  })

  useEffect(() => {
    if (status === 'success' && data !== null) {
      setPaciente(data as Paciente);
    }
  }, [status, data])

  return {
    paciente,
    colors,
    navigation,
    isLoading,
  }
}