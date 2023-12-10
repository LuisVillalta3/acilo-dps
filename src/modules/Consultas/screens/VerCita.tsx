import { View, Text, ScrollView, TouchableOpacity } from 'react-native'
import React from 'react'
import ViewContainer from '@components/ViewContainer'
import BackButton from '@components/BackButton'
import PageTitle from '@components/PageTitle'
import { useConsulta } from '../hooks/useConsulta'
import ListContainer from '@components/ListContainer'
import EmptySpace from '@components/EmptySpace'
import DataContainer from '@components/CitaCard/DataContainer'
import moment from 'moment-timezone'
import { AntDesign, FontAwesome5, Ionicons, MaterialCommunityIcons } from '@expo/vector-icons'
import { useTheme } from 'react-native-paper'
import CustomTextInput from '@components/inputs/CustomTextInput'
import DoctorCard from '../components/DoctorCard'

const VerCita = () => {
  const { consulta, isLoading, navigation } = useConsulta()
  const { colors } = useTheme()

  if (!consulta) return null

  return (
    <ViewContainer>
      <BackButton title="Citas" />
      <PageTitle title={`Cita #${consulta.citaId}`} paddingVertical={0} />
      <ListContainer isLoading={isLoading && consulta !== undefined}>
        <View style={{ paddingHorizontal: 20, paddingVertical: 10 }}>
          <DataContainer consulta={consulta} />
        </View>
        <ScrollView style={{ paddingHorizontal: 20, paddingVertical: 10 }}>
          <View style={{ backgroundColor: '#fff', paddingVertical: 10, paddingHorizontal: 20, borderRadius: 10, elevation: 2 }}>
            <View style={{ borderBottomColor: '#f4f4f4', borderBottomWidth: 1, paddingVertical: 5, marginBottom: 5 }}>
              <Text style={{ color: '#828282', fontSize: 12 }}>Paciente:</Text>
              <Text style={{ fontWeight: 'bold', fontSize: 20 }}>{consulta.paciente?.nombre || 'Sin definir'}</Text>
            </View>
            <Text style={{ color: '#828282', marginBottom: 5 }}>
              <Text style={{ fontWeight: 'bold' }}>Edad:</Text> {moment(consulta.paciente?.fechaNacimiento || moment()).diff(moment(), 'years') * -1} años
            </Text>
            <Text style={{ color: '#828282', marginBottom: 5 }}>
              <Text style={{ fontWeight: 'bold' }}>Teléfono:</Text> {consulta.paciente?.telefono}
            </Text>
            <View style={{ marginBottom: 5, flexDirection: 'row', alignItems: 'center' }}>
              <FontAwesome5
                name="whatsapp-square"
                size={20}
                color={colors.primary}
                style={{ marginRight: 6 }}
              />
              <Text style={{ color: '#828282' }}>{consulta.paciente?.whatsapp}</Text>
            </View>
            <View style={{ marginBottom: 5, flexDirection: 'row', alignItems: 'center' }}>
              <MaterialCommunityIcons
                name="email"
                size={20}
                color={colors.primary}
                style={{ marginRight: 6 }}
              />
              <Text style={{ color: '#828282' }}>{consulta.paciente?.telefono}</Text>
            </View>
            <View style={{ marginBottom: 5, flexDirection: 'row', alignItems: 'center' }}>
              <Ionicons
                name="location"
                size={20}
                color={colors.primary}
                style={{ marginRight: 6 }}
              />
              <Text style={{ color: '#828282' }}>{consulta.paciente?.direccion}</Text>
            </View>
          </View>
          <EmptySpace height={20} />
          <DoctorCard consulta={consulta} navigation={navigation} />
          <EmptySpace height={20} />
          <View style={{ backgroundColor: '#fff', paddingTop: 10, paddingBottom: 20, paddingHorizontal: 20, borderRadius: 10, elevation: 2 }}>
            <View>
              <Text style={{ color: '#828282', fontSize: 12 }}>Tipo consulta</Text>
              <Text style={{ fontWeight: 'bold', fontSize: 20 }}>Consulta general</Text>
            </View>
            <CustomTextInput
              label='Notas'
              mode='outlined'
              numberOfLines={10}
            />
          </View>
          <EmptySpace height={20} />
          {/* <ListContainer isLoading={false} isEmpty={false}>
            <Text style={{ fontWeight: 'bold', fontSize: 20 }}>Historial médico</Text>
            <Text style={{ color: '#828282', fontSize: 12 }}>Consultas previas</Text>
          </ListContainer> */}
          <TouchableOpacity onPress={() => {}} style={{ backgroundColor: colors.primary, borderRadius: 5, padding: 10, elevation: 1 }}>
            <Text style={{ textAlign: 'center', color: '#fff', fontWeight: 'bold' }}>Finalizar cita</Text>
          </TouchableOpacity>
          <EmptySpace height={40} />
        </ScrollView>
      </ListContainer>
    </ViewContainer>
  )
}

export default VerCita