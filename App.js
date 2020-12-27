import React from 'react';
import {createStackNavigator} from "@react-navigation/stack";
import {NavigationContainer} from "@react-navigation/native";

import  {Home, Restaurant, Order} from "./src/screens";
import Tabs from "./src/navigation/tabs"
const Stack = createStackNavigator();

const App = () =>{
  return (
    <NavigationContainer>
        <Stack.Navigator 
            screenOptions={{
                headerShown: false
            }}
            initialRouteName={"Home"}
        >
           <Stack.Screen name="Home" component={Tabs} />
           <Stack.Screen name="Restaurant" component={Restaurant} />
           <Stack.Screen name="Order" component={Order} />
        </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App;