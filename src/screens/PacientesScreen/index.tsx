import PageTitle from '@components/PageTitle'
import React from 'react'
import { View, Text, TouchableOpacity, ScrollView } from 'react-native'
import ViewContainer from '@components/ViewContainer';
import SearchInput from '@components/inputs/SearchInput';
import { Ionicons } from '@expo/vector-icons';
import PacienteCard from '@components/PacienteCard';
import styles from './styles';

const PacientesScreen = () => {
  return (
    <ViewContainer>
      <PageTitle title="Pacientes" />
      <View style={styles.filterContainer}>
        <View style={{ flex: 1 }}>
          <SearchInput label="Buscar paciente..." mode='outlined' />
        </View>
        <TouchableOpacity onPress={() => {}} style={styles.filterButton}>
          <Ionicons name="options" size={34} color="black" />
        </TouchableOpacity>
      </View>
      <ScrollView style={{ paddingHorizontal: 20 }}>
        <PacienteCard />
        <PacienteCard />
        <PacienteCard />
        <PacienteCard />
        <PacienteCard />
        <PacienteCard />
        <PacienteCard />
        <PacienteCard />
        <PacienteCard />
        <PacienteCard />
        <PacienteCard />
        <PacienteCard />
        <PacienteCard />
        <PacienteCard />
        <PacienteCard />
        <PacienteCard />
        <PacienteCard />
        <PacienteCard />
        <PacienteCard />
        <PacienteCard />
        <PacienteCard />
        <View style={{ height: 10 }} />
      </ScrollView>
    </ViewContainer>
  )
}

export default PacientesScreen
