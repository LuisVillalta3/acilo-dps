import PageTitle from '@components/PageTitle';
import React from 'react';
import { View, TouchableOpacity, ScrollView } from 'react-native';
import ViewContainer from '@components/ViewContainer';
import SearchInput from '@components/inputs/SearchInput';
import { Ionicons } from '@expo/vector-icons';
import Card from '../components/Card';
import styles from '../styles/ListScreenStyles';
import FabButton from '@components/FabButton';
import { useNavigation } from '@react-navigation/native';
import { ListScreenNavigation } from '../types';

const DoctoresScreen = () => {
  const navigation = useNavigation<ListScreenNavigation>();

  return (
    <ViewContainer>
      <PageTitle title="Doctores" />
      <View style={styles.filterContainer}>
        <View style={{ flex: 1 }}>
          <SearchInput label="Buscar doctor..." mode="outlined" />
        </View>
        <TouchableOpacity onPress={() => {}} style={styles.filterButton}>
          <Ionicons name="options" size={34} color="black" />
        </TouchableOpacity>
      </View>
      <ScrollView style={{ paddingHorizontal: 20 }}>
        <Card navigation={navigation} />
        <Card navigation={navigation} />
        <Card navigation={navigation} />
        <Card navigation={navigation} />
        <Card navigation={navigation} />
        <Card navigation={navigation} />
        <Card navigation={navigation} />
        <Card navigation={navigation} />
        <Card navigation={navigation} />
        <Card navigation={navigation} />
        <Card navigation={navigation} />
        <Card navigation={navigation} />
        <Card navigation={navigation} />
        <Card navigation={navigation} />
        <Card navigation={navigation} />
        <Card navigation={navigation} />
        <Card navigation={navigation} />
        <Card navigation={navigation} />
        <Card navigation={navigation} />
        <Card navigation={navigation} />
        <View style={{ height: 10 }} />
      </ScrollView>
      <FabButton
        icon="plus"
        onPress={() => navigation.navigate('DoctorFormScreen')}
      />
    </ViewContainer>
  );
};

export default DoctoresScreen;
