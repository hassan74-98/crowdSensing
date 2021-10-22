import 'react-native-gesture-handler';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './src/screens/HomeScreen';
import mainScreen from './src/screens/mainScreen';
import Register from './src/screens/Register';
const Stack = createStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{
          headerTitleAlign:"center",
          headerStyle:{
            backgroundColor:"#378a75",
          }
        }}>
        <Stack.Screen name="Home" component={HomeScreen} options={{title:"Login",headerTitleStyle:{color:"white"}}}/>
        <Stack.Screen name="Register" component={Register} options={{title:"Register",headerTitleStyle:{color:"white"}}}/>
        <Stack.Screen name="MainScreen" component={mainScreen} options={{title:"dashboard",headerTitleStyle:{color:"white"}}}/>
        {/* <TheContextProvider>
          <Stack.Screen name="Screen1" component={Screen1} />
          <Stack.Screen name="Screen2" component={Screen2} />
          <Stack.Screen name="Screen3" component={Screen3} />  
        </TheContextProvider> */}
        
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});