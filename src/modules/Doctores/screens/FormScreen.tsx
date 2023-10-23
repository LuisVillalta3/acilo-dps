import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import React, { useEffect } from 'react';
import ViewContainer from '@components/ViewContainer';
import PageTitle from '@components/PageTitle';
import BackButton from '@components/BackButton';
import { RouteProp, useNavigation, useRoute } from '@react-navigation/native';
import { FormScreenNavigation, DoctorRouteProps } from '../types';
import CustomTextInput from '@components/inputs/CustomTextInput';
import CustomButton from '@components/CustomButton';
import EmptySpace from '@components/EmptySpace';
import SelectInput from '@components/inputs/SelectInput';
import { Checkbox } from 'react-native-paper';

const Especialidades = [
  { label: 'Medicina General', value: 'Medicina General' },
  { label: 'Pediatría', value: 'Pediatría' },
  { label: 'Ginecología', value: 'Ginecología'}
]

const FormScreen = () => {
  const navigation = useNavigation<FormScreenNavigation>();
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
        title={`${id ? 'Editar' : 'Agregar'} Doctor`}
        paddingVertical={0}
      />
      <ScrollView style={{ paddingHorizontal: 20, paddingVertical: 10 }}>
        <CustomTextInput label="Nombre" mode="outlined" />
        <EmptySpace />
        <CustomTextInput
          label="Teléfono"
          mode="outlined"
          keyboardType="phone-pad"
        />
        <EmptySpace />
        <CustomTextInput
          label="Correo electrónico"
          mode="outlined"
          keyboardType="email-address"
        />
        <EmptySpace />
        <CustomTextInput
          label="Whatsapp"
          mode="outlined"
          keyboardType="phone-pad"
        />
        <EmptySpace />
        <CustomTextInput
          label="Número de DUI"
          mode="outlined"
          keyboardType="number-pad"
        />
        <EmptySpace />
        <SelectInput label="Especialidad" mode="outlined" options={Especialidades} />
        <EmptySpace />
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <Checkbox
            status={'checked'}
          />
          <Text>Disponible para consultas</Text>
        </View>
        <EmptySpace />
        <CustomButton
          text={`${id ? 'Actualizar' : 'Crear'} Doctor`}
          onPress={() => navigation.navigate('DoctoresScreen')}
        />
      </ScrollView>
    </ViewContainer>
  );
};

export default FormScreen;
