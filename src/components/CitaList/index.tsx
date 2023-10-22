import { View, Text } from 'react-native'
import React from 'react'
import CitaListItem from '@components/CitaListItem'
import styles from './styles'

const CitaList = () => {
  return (
    <View style={styles.citaList}>
      <CitaListItem />
      <CitaListItem inProgress={true} />
      <CitaListItem />
      <CitaListItem />
      <CitaListItem />
      <CitaListItem />
      <CitaListItem />
      <CitaListItem />
    </View>
  )
}

export default CitaList