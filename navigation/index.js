import React from "react"
import { View, Text } from "react-native"
// import { StackNavigator } from "react-navigation"
import { NavigationContainer } from "@react-navigation/native"
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screen/HomeScreen'

const Stack = createStackNavigator();

// const HomeScreen= () => (
//   <View>
//     <Text>Home Screen</Text>
//   </View>
// )

// const DetailsScreen = () => (
//   <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
//     <Text>Details Screen</Text>
//   </View>
// )


export default function Navigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator  screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Home" component={HomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}