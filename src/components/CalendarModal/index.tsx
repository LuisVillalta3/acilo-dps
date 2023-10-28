import { ScrollView } from 'react-native'
import React from 'react'
import { CalendarModalProps } from './types';
import CitaList from '@components/CitaList';
import CustomModal from '@components/CustomModal';

const CalendarModal: React.FC<CalendarModalProps> = (props) => {
  return (
    <CustomModal {...props}>
      <ScrollView>
        <CitaList />
      </ScrollView>
    </CustomModal>
  )
}

export default CalendarModal