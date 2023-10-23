import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import React, { useEffect } from 'react';
import ViewContainer from '@components/ViewContainer';
import PageTitle from '@components/PageTitle';
import BackButton from '@components/BackButton';
import { RouteProp, useNavigation, useRoute } from '@react-navigation/native';
import { DoctorHorarioFormScreenNavigation, DoctorRouteProps } from '../types';
import CustomButton from '@components/CustomButton';
import EmptySpace from '@components/EmptySpace';
import InfoBlock from '../components/InfoBlock';
import { Ionicons } from '@expo/vector-icons';
import RangoFecha from '../components/RangoFecha';
import { DIAS } from '../constants';

const DoctorHorarioFormScreen = () => {
  const navigation = useNavigation<DoctorHorarioFormScreenNavigation>();
  const [id, setId] = React.useState<string>();
  const route = useRoute<RouteProp<DoctorRouteProps>>();

  useEffect(() => {
    if (route.params === undefined) return;
    const { doctorId } = route.params;
    setId(doctorId);
  }, [route]);

  return (
    <ViewContainer>
      <BackButton title="Doctores" />
      <PageTitle
        title='Editar horarios'
        paddingVertical={0}
      />
      <ScrollView style={{ paddingHorizontal: 20, paddingVertical: 10 }}>
        <InfoBlock
          title='Nombre'
          value='Luis Villalta'
          icon={<Ionicons name="person" size={34} color="#27B2B3" />}
        />
        {DIAS.map((dia) => (
          <View key={dia}>
            <RangoFecha dia={dia} />
            <EmptySpace />
          </View>
        ))}
        <CustomButton
          text='Actualizar horarios'
          onPress={() => navigation.navigate('DoctoresScreen')}
        />
      </ScrollView>
    </ViewContainer>
  );
};

export default DoctorHorarioFormScreen;
