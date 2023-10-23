import { View, Text, TouchableOpacity } from 'react-native';
import React from 'react';
import {
  MaterialIcons,
  FontAwesome5,
  AntDesign,
  FontAwesome
} from '@expo/vector-icons';
import styles from '@routes/BottomTabNavigator/styles';
import { useTheme } from 'react-native-paper';
import { DoctorCardProps } from './types';
import CalendarModal from '@components/CalendarModal';

const Card: React.FC<DoctorCardProps> = ({ navigation }) => {
  const [visible, setVisible] = React.useState(false);

  const showModal = () => setVisible(true);
  const hideModal = () => setVisible(false);

  const { colors } = useTheme();
  const navigationProps = {
    doctorId: 1
  };

  return (
    <View style={styles.container}>
      <CalendarModal visible={visible} hideModal={hideModal} />
      <View style={styles.titleContainer}>
        <View>
          <Text style={styles.titleText}>Dr. John Doe</Text>
          <Text style={styles.subtitleText}>Medico general</Text>
        </View>
        <View style={styles.iconsContainer}>
          <TouchableOpacity onPress={() => navigation.navigate('DoctorHorarioFormScreen', navigationProps)}>
            <FontAwesome name="clock-o" size={24} color={colors.primary} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('DoctorScreen', navigationProps)}>
            <AntDesign name="eye" size={24} color={colors.primary} />
          </TouchableOpacity>
          <TouchableOpacity onPress={showModal}>
            <FontAwesome5
              name="calendar-alt"
              size={24}
              color={colors.primary}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('DoctorFormScreen', navigationProps)}>
            <MaterialIcons name="edit" size={24} color={colors.primary} />
          </TouchableOpacity>
        </View>
      </View>
      <View>
        <View style={styles.datosContainer}>
          <TouchableOpacity style={styles.infoButton}>
            <Text style={styles.datosText}>Tel:</Text>
            <Text style={styles.datosText}>7484-3233</Text>
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
        </View>
        <TouchableOpacity style={styles.infoButton}>
          <View style={styles.infoIcon}>
            <MaterialIcons name="email" size={24} color="#7F7F7F" />
          </View>
          <Text style={styles.datosText}>john.doe@email.com</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Card;
