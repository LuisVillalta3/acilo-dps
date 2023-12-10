import { RouteProp, useNavigation, useRoute } from "@react-navigation/native";
import { ConsultaRouteProps, ListScreenNavigation } from "../types";
import { useEffect, useState } from "react";
import { Consulta } from "@models/consulta";
import { useQuery } from "@tanstack/react-query";
import consultasService from "@services/consultas.service";

export const useConsulta = () => {
  const route = useRoute<RouteProp<ConsultaRouteProps>>();
  const navigation = useNavigation<ListScreenNavigation>();
  const [id, setId] = useState<string>("");
  const [consulta, setConsulta] = useState<Consulta>();

  useEffect(() => {
    if (route.params === undefined) return;
    const { consultaId } = route.params;
    if (consultaId === undefined) return navigation.navigate("ConsultasScreen");
    setId(consultaId);
  }, [route]);

  const { data, status, isLoading } = useQuery({
    queryKey: ['getPaciente', id],
    queryFn: () => consultasService.getConsulta(id, { includeDoctor: true, includePaciente: true, includeEspecialidad: true, includeTipoConsulta: true }),
    refetchOnWindowFocus: true,
    refetchOnReconnect: true,
  })

  useEffect(() => {
    if (status === 'success' && data !== null) {
      setConsulta(data as Consulta);
    }
  }, [status, data])

  return {
    consulta,
    navigation,
    isLoading,
  }
}