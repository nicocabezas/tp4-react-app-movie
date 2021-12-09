import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import { DrawerNavigator } from './Drawer';

import { LoginScreen } from "../screens/LoginScreen";
import { FilmDetailScreen } from "../screens/FilmDetailScreen";

const Stack = createNativeStackNavigator();

export const Navigator = () => {  

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={LoginScreen} options={{headerShown: false}} />
        <Stack.Screen name="Film Detail" component={FilmDetailScreen} />
        <Stack.Screen
          name="DrawerNavigator"
          component={DrawerNavigator}
          options={{ headerShown: false }}
        />         
      </Stack.Navigator>
    </NavigationContainer>
  );
};
