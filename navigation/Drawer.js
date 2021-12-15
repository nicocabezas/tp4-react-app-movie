import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { HomeScreen } from "../screens/HomeScreen";
import { FilmsScreen } from "../screens/FilmsScreen";
import { About } from "../screens/About";



const Drawer = createDrawerNavigator()

export const DrawerNavigator = () => {  

    return (
        
        <Drawer.Navigator screenOptions={{
            drawerStyle: {
              backgroundColor: '#FFA420',
              width: 240,
            },
          }}>
            <Drawer.Screen name="Home" component={HomeScreen} initial={true} />
            <Drawer.Screen name="Films" component={FilmsScreen} />
            <Drawer.Screen name="About us" component={About} />  
        </Drawer.Navigator>
        
    );
};

