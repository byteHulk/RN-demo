import { StatusBar } from "expo-status-bar"
import React from "react"
import Navigation from './navigation';
import { View } from "react-native"

export default function App() {
  return (
    <View>
      <Navigation/>
      <StatusBar style="auto" />
    </View>
  )
}
