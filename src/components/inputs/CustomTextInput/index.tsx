import { View, Text } from 'react-native'
import React from 'react'
import { TextInput } from 'react-native-paper'
import { CustomTextInputProps } from './types'
import styles from './style'

const CustomTextInput = ({
  label,
  placeholder,
  mode,
  multiline,
  onChangeText,
  value,
  onBlur,
  error,
  numberOfLines = 1,
  keyboardType = 'default'
}: CustomTextInputProps) => {
  return (
    <View>
      <TextInput
        label={label}
        onBlur={onBlur}
        mode={mode}
        placeholder={placeholder}
        style={{ backgroundColor: '#F9F9F9' }}
        activeOutlineColor="#27B2B3"
        outlineColor='#bcbcbc'
        keyboardType={keyboardType}
        value={value}
        multiline={multiline}
        onChangeText={onChangeText}
        error={!!error && error.length > 0}
        numberOfLines={numberOfLines}
      />
      {error && error.length > 0 && (
        <Text style={styles.errorText}>{error}</Text>
      )}
    </View>
  )
}

export default CustomTextInput