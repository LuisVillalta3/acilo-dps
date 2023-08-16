import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { MaterialIcons, FontAwesome5, AntDesign, FontAwesome  } from '@expo/vector-icons';
import styles from '@navigation/styles';
import { useTheme } from 'react-native-paper';

const PacienteCard = () => {
  const { colors } = useTheme()

  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.titleText}>John Doe</Text>
        <View style={styles.iconsContainer}>
          <TouchableOpacity>
            <AntDesign name="eye" size={24} color={colors.primary} />
          </TouchableOpacity>
          <TouchableOpacity>
            <FontAwesome5 name="calendar-alt" size={24} color={colors.primary} />
          </TouchableOpacity>
          <TouchableOpacity>
            <MaterialIcons name="edit" size={24} color={colors.primary} />
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.datosContainer}>
        <Text style={styles.datosText}>
          <Text style={styles.fontBold}>Edad:</Text>
          60 años
        </Text>
        <Text style={styles.datosText}>
          <Text style={styles.fontBold}>Tel:</Text>
          2203-2203
        </Text>
      </View>
      <View>
        <TouchableOpacity style={styles.infoButton}>
          <FontAwesome5 name="whatsapp-square" size={24} color={colors.primary} style={{ marginRight: 6 }} />
          <Text style={styles.datosText}>7484-3233</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.infoButton}>
          <View style={styles.infoIcon}>
            <MaterialIcons name="email" size={24} color="#7F7F7F" />
          </View>
          <Text style={styles.datosText}>john.doe@email.com</Text>
        </TouchableOpacity>
        <View style={styles.infoButton}>
          <View style={[styles.infoIcon, { alignItems: "center" }]}>
            <FontAwesome5 name="map-marker-alt" size={24} color="#7F7F7F" />
          </View>
          <Text style={styles.datosText}>San Salvador, El Salvador</Text>
        </View>
      </View>
    </View>
  )
}

export default PacienteCard