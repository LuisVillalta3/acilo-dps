import { View, Text, ScrollView } from 'react-native';
import React, { useEffect } from 'react';
import ViewContainer from '@components/ViewContainer';
import PageTitle from '@components/PageTitle';
import BackButton from '@components/BackButton';
import { useNavigation, useRoute } from '@react-navigation/native';
import { FormScreenNavigation, FormScreenProps } from '../types';
import CustomTextInput from '@components/inputs/CustomTextInput';
import CustomButton from '@components/CustomButton';
import EmptySpace from '@components/EmptySpace';
import DatePicker from '@components/inputs/DatePicker';

const FormScreen: React.FC<FormScreenProps> = ({ route }) => {
  const navigation = useNavigation<FormScreenNavigation>();
  const [id, setId] = React.useState<string>();
  
  useEffect(() => {
    if (route.params === undefined) return;
    const { pacienteID } = route.params;
    setId(pacienteID);
  }, [route])

  return (
    <ViewContainer>
      <BackButton title="Pacientes" />
      <PageTitle title={`${id ? 'Editar' : 'Agregar'} paciente`} paddingVertical={0} />
      <ScrollView style={{ paddingHorizontal: 20, paddingVertical: 10 }}>
        <CustomTextInput label="Nombre" mode="outlined" />
        <EmptySpace />
        <CustomTextInput label="Teléfono" mode="outlined" keyboardType='phone-pad' />
        <EmptySpace />
        <CustomTextInput label="Correo electrónico" mode="outlined" keyboardType='email-address' />
        <EmptySpace />
        <CustomTextInput label="Whatsapp" mode="outlined" keyboardType='phone-pad' />
        <EmptySpace />
        <CustomTextInput label="Número de DUI" mode="outlined" keyboardType='number-pad' />
        <EmptySpace />
        <DatePicker label="Fecha de nacimiento" mode="outlined" />
        <EmptySpace />
        <CustomTextInput label="Dirección" mode="outlined" multiline numberOfLines={5} />
        <EmptySpace />
        <CustomButton text={`${id ? 'Actualizar' : 'Crear'} paciente`} onPress={() => navigation.navigate("PacientesScreen")} />
      </ScrollView>
    </ViewContainer>
  );
};

export default FormScreen;
