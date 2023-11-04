import { useEspecialidades } from "../../../hooks/useEspecialidades"
import { useFormik } from 'formik'
import { formInitialValues } from "../constants"
import { doctorFormSchema } from "../validations/doctorFormSchema"
import doctorsService from "../../../services/doctors.service"
import Toast from "react-native-toast-message"
import { DoctorRouteProps, FormScreenNavigation } from "../types"
import { RouteProp, useNavigation, useRoute } from "@react-navigation/native"
import { useDoctores } from "./useDoctores"
import { useEffect, useState } from "react"
import { useQuery } from "@tanstack/react-query"

export const useDoctorForm = () => {
  const [id, setId] = useState<string>("");
  const route = useRoute<RouteProp<DoctorRouteProps>>();
  const { especialidadesList } = useEspecialidades()
  const { refetch: doctoresRefecth } = useDoctores()
  const navigation = useNavigation<FormScreenNavigation>();

  const { handleChange, handleBlur, handleSubmit, values, errors, isValid, setFieldValue } = useFormik({
    initialValues: formInitialValues,
    enableReinitialize: true,
    validateOnChange: false,
    validationSchema: doctorFormSchema,
    onSubmit: async (values) => {
      try {
        let text1 = 'Doctor creado correctamente.'
        let text2 = `El doctor ${values.nombre} ha sido creado correctamente.`
        if (id === "") {
          await doctorsService.postDoctor(values)
        } else {
          await doctorsService.patchDoctor(id, values)
          text1 = 'Doctor actualizado correctamente.'
          text2 = `El doctor ${values.nombre} ha sido actualizado correctamente.`
        }
        
        Toast.show({ type: 'success', text1, text2 });

        await doctoresRefecth()
        if (id === "") {
          navigation.navigate('DoctoresScreen')
        }
      } catch (error) {
        Toast.show({
          type: 'error',
          text1: 'Ha ocurrido un error al crear el doctor.',
          text2: 'Por favor, intenta de nuevo.'
        });
      }
    }
  })

  useEffect(() => {
    if (route.params === undefined) return;
    const { doctorId } = route.params;
    if (doctorId === undefined) return;
    setId(doctorId);
  }, [route]);

  const { data, status, isLoading } = useQuery({
    queryKey: ['getDoctor', id],
    queryFn: () => doctorsService.getDoctor(id || ''),
    refetchOnWindowFocus: true,
    refetchOnReconnect: true,
  })

  useEffect(() => {
    if (status === 'success' && data !== null) {
      setFieldValue('nombre', data.nombre)
      setFieldValue('email', data.email)
      setFieldValue('telefono', data.telefono)
      setFieldValue('whatsapp', data.whatsapp)
      setFieldValue('dui', String(data.dui).replace(/-/g, ''))
      setFieldValue('idEspecialidad', String(data.idEspecialidad))
      setFieldValue('disponible', data.disponible)
    }
  }, [status, data])

  return {
    especialidadesList,
    handleChange,
    handleBlur,
    handleSubmit,
    values,
    errors,
    isValid,
    setFieldValue,
    id,
    isLoading,
  }
}
