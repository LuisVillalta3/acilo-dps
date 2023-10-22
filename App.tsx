import BottomTabNavigator from '@routes/BottomTabNavigator';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createRef } from 'react';
import { PaperProvider } from 'react-native-paper';
import { MyTheme, NavigationTheme } from './src/themes';
import PacienteFormScreen from '@modules/Pacientes/screens/FormScreen';
import { ScreenStackList } from '@routes/types';
import PacienteScreen from '@modules/Pacientes/screens/PacienteScreen';

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
        </Stack.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
}
