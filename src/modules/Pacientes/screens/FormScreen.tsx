import { View, Text, ScrollView } from 'react-native';
import React from 'react';
import ViewContainer from '@components/ViewContainer';
import PageTitle from '@components/PageTitle';
import BackButton from '@components/BackButton';
import { useNavigation } from '@react-navigation/native';
import { FormScreenNavigation } from '../types';
import CustomTextInput from '@components/inputs/CustomTextInput';
import CustomButton from '@components/CustomButton';

const FormScreen = () => {
  const navigation = useNavigation<FormScreenNavigation>();

  return (
    <ViewContainer>
      <BackButton title="Pacientes" />
      <PageTitle title="Agregar paciente" paddingVertical={0} />
      <ScrollView style={{ paddingHorizontal: 20, paddingVertical: 10 }}>
        <CustomTextInput label="Nombre" mode="outlined" />
        <CustomTextInput label="Teléfono" mode="outlined" />
        <CustomTextInput label="Correo electrónico" mode="outlined" />
        <CustomTextInput label="Whatsapp" mode="outlined" />
        <CustomTextInput label="Número de DUI" mode="outlined" />
        <CustomTextInput label="Fecha de nacimientos" mode="outlined" />
        <CustomTextInput label="Dirección" mode="outlined" />
        <CustomButton text="Crear paciente" />
      </ScrollView>
    </ViewContainer>
  );
};

export default FormScreen;
