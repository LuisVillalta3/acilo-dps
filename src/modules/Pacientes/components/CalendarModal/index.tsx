import { ScrollView, TouchableOpacity, View } from 'react-native'
import { Modal, Portal, Text, Button, PaperProvider, useTheme } from 'react-native-paper';
import React from 'react'
import { CalendarModalProps } from './types';
import CitaList from '@components/CitaList';
import { AntDesign } from '@expo/vector-icons';

const containerStyle = { backgroundColor: 'white', padding: 20, margin: 20, borderRadius: 5 };

const CalendarModal: React.FC<CalendarModalProps> = ({ visible, hideModal }) => {
  const { colors } = useTheme()
  return (
    <Portal>
      <Modal visible={visible} onDismiss={hideModal} contentContainerStyle={containerStyle}>
        <View style={{ marginBottom: 10, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
          <Text style={{ fontSize: 24, fontWeight: 'bold' }}>Proximas citas</Text>
          <TouchableOpacity onPress={hideModal}>
            <AntDesign name="closecircle" size={24} color={colors.primary} />
          </TouchableOpacity>
        </View>
        <ScrollView>
          <CitaList />
        </ScrollView>
      </Modal>
    </Portal>
  )
}

export default CalendarModal