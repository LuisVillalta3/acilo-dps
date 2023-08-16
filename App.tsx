import BottomTabNavigator from '@navigation/BottomTabNavigator';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createRef } from 'react';
import { PaperProvider } from 'react-native-paper';
import { MyTheme, NavigationTheme } from './src/themes';

const Stack = createNativeStackNavigator();

export default function App() {
    const navigationRef = createRef<any>();

    return (
        <PaperProvider theme={MyTheme}>
            <NavigationContainer ref={navigationRef} theme={NavigationTheme}>
                <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName="Navigation">
                    <Stack.Screen name="Navigation" component={BottomTabNavigator} />
                </Stack.Navigator>
            </NavigationContainer>
        </PaperProvider>
    );
}
