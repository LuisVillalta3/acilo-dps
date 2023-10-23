import { View, Text, Keyboard } from 'react-native'
import React, { useState } from 'react'
import { RangoFechaProps } from './types'
import { DateTimePickerAndroid } from '@react-native-community/datetimepicker';
import { TextInput } from 'react-native-paper';

const RangoFecha = ({ dia }: RangoFechaProps) => {
  const [startHour, setStartHour] = useState<Date>(new Date());
  const [endHour, setEndHour] = useState<Date>(new Date());

  const onChangeStartHour = (event: any, selectedDate: any) => {
    setStartHour(selectedDate);
    Keyboard.dismiss()
  };

  const onChangeEndHour = (event: any, selectedDate: any) => {
    setEndHour(selectedDate);
    Keyboard.dismiss()
  };

  const showDatepicker = (value: Date,  onChange: ((event: any, date?: Date | undefined) => void)) => {
    DateTimePickerAndroid.open({
      value,
      onChange,
      mode: 'time',
      is24Hour: false,
    });
  };

  return (
    <View>
      <Text style={{ fontWeight: 'bold', fontSize: 20 }}>{dia}</Text>
      <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
        <TextInput
          mode='outlined'
          placeholder='HH:MM'
          style={{ backgroundColor: '#F9F9F9', width: '48%' }}
          activeOutlineColor="#27B2B3"
          outlineColor='#bcbcbc'
          value={startHour?.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }).toString()}
          onPressOut={Keyboard.dismiss}
          onPressIn={() => showDatepicker(startHour, onChangeStartHour)}
          left={<TextInput.Icon icon="clock" color="#7F7F7F" />}
        />
        <TextInput
          mode='outlined'
          placeholder='HH:MM'
          style={{ backgroundColor: '#F9F9F9', width: '48%' }}
          activeOutlineColor="#27B2B3"
          outlineColor='#bcbcbc'
          value={endHour?.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }).toString()}
          onPressOut={Keyboard.dismiss}
          onPressIn={() => showDatepicker(endHour, onChangeEndHour)}
          left={<TextInput.Icon icon="clock" color="#7F7F7F" />}
        />
      </View>
    </View>
  )
}

export default RangoFecha