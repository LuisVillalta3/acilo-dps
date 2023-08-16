import { View, Text } from 'react-native'
import React from 'react'
import { TextInput } from 'react-native-paper'
import { CustomTextInputProps } from './types'
import styles from './style'

const CustomTextInput = ({
  label,
  placeholder,
  mode,
}: CustomTextInputProps) => {
  return (
    <TextInput
      label={label}
      mode={mode}
      placeholder={placeholder}
      style={{ backgroundColor: '#F9F9F9' }}
      activeOutlineColor="#27B2B3"
      outlineColor='#bcbcbc'
    />
  )
}

export default CustomTextInput