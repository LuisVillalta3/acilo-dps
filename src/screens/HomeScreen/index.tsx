import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import HomeButtonCard from '@components/HomeButtonCard'
import { Ionicons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import CitaListItem from '@components/CitaListItem';
import styles from './styles';
import { useTheme } from 'react-native-paper';

const HomeScreen = () => {
  const { colors } = useTheme();

  return (
    <SafeAreaView>
      <ScrollView style={{ padding: 20 }}>
        <View>
          <Text style={styles.saludo}>
            Hola,{'\n'}
            <Text style={styles.nombreUsuario}>Dr. John Doe</Text>
          </Text>
        </View>
        <View style={styles.buttonsContainer}>
          <View style={{ flex: 1, marginRight: 5 }}>
            <HomeButtonCard
              title="Doctores"
              description="Gestión de personal"
              icon={<MaterialCommunityIcons name="stethoscope" size={34} color={colors.primary} />}
            />
          </View>
          <View style={{ flex: 1, marginLeft: 5 }}>
            <HomeButtonCard
              title="Pacientes"
              description="Gestión de pacientes"
              icon={<Ionicons name="person" size={34} color={colors.primary} />}
            />
          </View>
        </View>
        <View style={{ marginVertical: 20 }}>
          <Text style={styles.citasText}>Proximas citas</Text>
        </View>
        <View style={styles.citaList}>
          <CitaListItem />
          <CitaListItem inProgress={true} />
          <CitaListItem />
          <CitaListItem />
          <CitaListItem />
          <CitaListItem />
          <CitaListItem />
          <CitaListItem />
          <CitaListItem />
          <CitaListItem />
        </View>
        <View style={{ height: 50 }}></View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default HomeScreen
