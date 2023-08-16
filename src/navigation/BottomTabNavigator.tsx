import React from 'react'
import { View, Text, Dimensions } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import HomeScreen from '@screens/HomeScreen';
import DoctoresScreen from '@screens/DoctoresScreen';
const Tab = createBottomTabNavigator();
const { width, height } = Dimensions.get('window')
import { Foundation, MaterialCommunityIcons } from '@expo/vector-icons';
import PacientesScreen from '@screens/PacientesScreen';
import { Ionicons } from '@expo/vector-icons';

const BottomTabNavigator = () => {
  return (
    <View style={{ width, height, backgroundColor: "#F9F9F9" }}>
      <Tab.Navigator screenOptions={{ headerShown: false, tabBarShowLabel: false, tabBarStyle: { height: 54 } }} initialRouteName="Home">
        <Tab.Screen name="HomeScreen" component={HomeScreen} options={{ 
          tabBarIcon: ({ color }) => (
            <Foundation name="home" size={30} color={color} />
          ),
         }} />
        <Tab.Screen name="PacientesScreen" component={PacientesScreen} options={{ 
          tabBarIcon: ({ color }) => (
            <Ionicons name="md-person" size={30} color={color} />
          ),
         }} />
        <Tab.Screen name="DoctoresScreen" component={DoctoresScreen} options={{
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="stethoscope" size={30} color={color} />
          )
         }} />
      </Tab.Navigator>
    </View>
  )
}

export default BottomTabNavigator