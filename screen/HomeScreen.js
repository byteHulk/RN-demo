import React, { useRef } from "react"
import { StyleSheet, View, Animated,Button, Text, TextInput } from "react-native"

import MapRotations from "../components/MapRotations"
import SearchInput from "../components/SearchInput"

export default function HomeScreen() {
  const fadeAnim = useRef(new Animated.Value(0)).current

  const fadeIn = () => {
    // Will change fadeAnim value to 1 in 5 seconds
    Animated.timing(fadeAnim, {
      toValue: 10,
      duration: 5000,
    }).start()
  }

  const fadeOut = () => {
    // Will change fadeAnim value to 0 in 5 seconds
    Animated.timing(fadeAnim, {
      toValue: 0,
      duration: 5000,
    }).start()
  }

  const goToIndex = () => {
    fadeIn()
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}></View>
      <MapRotations />
      <View style={styles.botBox}>
        <View style={styles.sAdv}></View>
        <Animated.View
          style={[
            {
              transform: `translateY(${fadeAnim})`,
            },
          ]}
        >
          <View style={styles.searchBox}>
            <SearchInput goToIndex={goToIndex}/>
            <Button title="Fade In" onPress={fadeIn} />
            <Button title="Fade Out" onPress={fadeOut} />
          </View>
        </Animated.View>
      </View>
      {/* <Text>Home Screen11`123</Text> */}
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: "rgb(236, 236, 236)",
  },
  header: {
    width: "100%",
    height: 70,
    paddingTop: 10,
    backgroundColor: "skyblue",
    fontWeight: "bold",
  },
  botBox: {
    padding: 10,
    backgroundColor: "rgb(236, 236, 236)",
  },
  sAdv: {
    width: "100%",
    height: 200,
    backgroundColor: "purple",
    marginBottom: 10,
  },
})
