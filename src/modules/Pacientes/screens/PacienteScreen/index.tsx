import { ScrollView, TouchableOpacity, View, Text } from 'react-native'
import React, { useEffect } from 'react'
import { RouteProp, useNavigation, useRoute, useTheme } from '@react-navigation/native';
import { PacienteRouteProps, PacienteScreenNavigation } from '../../types';
import ViewContainer from '@components/ViewContainer';
import BackButton from '@components/BackButton';
import PageTitle from '@components/PageTitle';
import InfoBlock from '../../components/InfoBlock';
import { Ionicons } from '@expo/vector-icons';
import { FontAwesome5, MaterialIcons, Entypo } from '@expo/vector-icons';
import styles from './styles';
import CitaList from '@components/CitaList';
import EmptySpace from '@components/EmptySpace';

const PacienteScreen = () => {
  const { colors } = useTheme();
  const route = useRoute<RouteProp<PacienteRouteProps>>();
  const { pacienteID } = route.params;
  const navigation = useNavigation<PacienteScreenNavigation>();

  useEffect(() => {
    if (!pacienteID) {
      navigation.navigate("PacientesScreen");
    }
  }, [pacienteID])

  return (
    <ViewContainer>
      <BackButton title="Pacientes" />
      <PageTitle title="Datos del paciente" paddingVertical={0} />
      <ScrollView style={{ paddingHorizontal: 20, paddingVertical: 10 }}>
        <InfoBlock
          title='Nombre'
          value='Luis Villalta'
          icon={<Ionicons name="person" size={34} color="#27B2B3" />}
        />
        <View>
          <View style={styles.infoButton}>
            <Text style={[styles.datosText, { fontWeight: 'bold' }]}>
              Edad: &nbsp;
            </Text>
            <Text style={styles.datosText}>23 años</Text>
          </View>
          <View style={styles.infoButton}>
            <Text style={[styles.datosText, { fontWeight: 'bold' }]}>
              Fecha de nacimiento: &nbsp;
            </Text>
            <Text style={styles.datosText}>03/06/2000</Text>
          </View>
          <TouchableOpacity style={styles.infoButton}>
            <View style={styles.infoIcon}>
              <Entypo name="phone" size={24} color={colors.primary} />
            </View>
            <Text style={styles.datosText}>+503 1234-5678</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.infoButton}>
            <FontAwesome5
              name="whatsapp-square"
              size={24}
              color={colors.primary}
              style={{ marginRight: 6 }}
            />
            <Text style={styles.datosText}>7484-3233</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.infoButton}>
            <View style={styles.infoIcon}>
              <MaterialIcons name="email" size={24} color={colors.primary} />
            </View>
            <Text style={styles.datosText}>john.doe@email.com</Text>
          </TouchableOpacity>
          <View style={styles.infoButton}>
            <View style={[styles.infoIcon, { alignItems: 'center' }]}>
              <FontAwesome5 name="map-marker-alt" size={24} color={colors.primary} />
            </View>
            <Text style={styles.datosText}>San Salvador, El Salvador</Text>
          </View>
        </View>
        <View style={{ marginVertical: 20 }}>
          <Text style={{ fontSize: 24, fontWeight: 'bold' }}>Historial de citas</Text>
        </View>
        <CitaList />
        <EmptySpace height={40} />
      </ScrollView>
    </ViewContainer>
  )
}

export default PacienteScreen