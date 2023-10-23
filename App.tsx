import BottomTabNavigator from '@routes/BottomTabNavigator';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createRef } from 'react';
import { PaperProvider } from 'react-native-paper';
import { MyTheme, NavigationTheme } from './src/themes';
import PacienteFormScreen from '@modules/Pacientes/screens/FormScreen';
import DoctorFormScreen from '@modules/Doctores/screens/FormScreen';
import { ScreenStackList } from '@routes/types';
import PacienteScreen from '@modules/Pacientes/screens/PacienteScreen';
import DoctorScreen from '@modules/Doctores/screens/DoctorScreen';
import DoctorHorarioFormScreen from '@modules/Doctores/screens/HorariosScreen';

const Stack = createNativeStackNavigator<ScreenStackList>();

export default function App() {
  const navigationRef = createRef<any>();

  return (
    <PaperProvider theme={MyTheme}>
      <NavigationContainer ref={navigationRef} theme={NavigationTheme}>
        <Stack.Navigator
          screenOptions={{ headerShown: false }}
          initialRouteName="Navigation"
        >
          <Stack.Screen name="Navigation" component={BottomTabNavigator} />
          <Stack.Screen
            name="PacienteFormScreen"
            component={PacienteFormScreen}
          />
          <Stack.Screen
            name="PacienteScreen"
            component={PacienteScreen}
          />
          <Stack.Screen
            name="DoctorFormScreen"
            component={DoctorFormScreen}
          />
          <Stack.Screen
            name="DoctorHorarioFormScreen"
            component={DoctorHorarioFormScreen}
          />
          <Stack.Screen
            name="DoctorScreen"
            component={DoctorScreen}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
}
