import { View, Text, TouchableOpacity } from 'react-native'
import React, { useMemo } from 'react'
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons'
import styles from './styles'
import { Consulta } from '@models/consulta'
import moment from 'moment-timezone'

const color = "#27B2B3"

type CitaCardProps = {
  consulta?: Consulta
}

const CitaCard: React.FC<CitaCardProps> = ({ consulta }) => {
  const status = useMemo(() => {
    if (!consulta) return 'Sin definir'
    if (consulta.status === 1) return 'Próxima'
    if (consulta.status === 2) return 'Completada'
    if (consulta.status === 3) return 'Cancelada'
    if (consulta.status === 4) return 'Terminada'
    if (consulta.status === 5) return 'En curso'
    return 'Sin definir'
  }, [consulta])

  const dotColor = useMemo(() => {
    if (!consulta) return color
    if (consulta.status === 1) return '#aaa'
    if (consulta.status === 2) return '#1B9A59'
    if (consulta.status === 3) return '#F44336'
    if (consulta.status === 4) return '#1B9A59'
    if (consulta.status === 5) return color
    return color
  }, [consulta?.status])

  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <View>
          <Text style={styles.title}>{consulta?.especialidad.nombre ?? 'Sin definir'}</Text>
          <Text style={styles.drName}>Dr. {consulta?.doctor?.nombre ?? 'Sin definir'}</Text>
        </View>
        <MaterialCommunityIcons
          name="stethoscope"
          size={50}
          color={color}
        />
      </View>
      <View style={styles.dataContainer}>
        <View style={styles.dataTextContainer}>
          <Ionicons name="calendar" size={20} color={color} />
          <Text style={styles.dataText}>{moment(consulta?.fecha).format('DD/MM/YYYY')}</Text>
        </View>
        <View style={styles.dataTextContainer}>
          <MaterialCommunityIcons name="clock" size={20} color={color} />
          <Text style={styles.dataText}>{moment(consulta?.horaInicio).format('hh:mm A')}</Text>
        </View>
        <View style={styles.dataTextContainer}>
          <View style={{ ...styles.dot, backgroundColor: dotColor }} />
          <Text style={styles.dataText}>{status}</Text>
        </View>
      </View>
      <View style={styles.buttonsContainer}>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Agendar proxima cita</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{ 
          ...styles.button,
          ...styles.primaryButton,
         }}>
          <Text style={{ 
            ...styles.buttonText,
            ...styles.primaryButtonText,
           }}>Ver detalles</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default CitaCard