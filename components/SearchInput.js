import React from "react"
import { StyleSheet, Text, TextInput, View, Dimensions } from "react-native"

export default function SearchInput(props) {
  return (
    <View style={styles.container}>
      <TextInput onFocus={props.goToIndex}/>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 50,
    borderRadius: 5,
    backgroundColor: "#fff",
    shadowColor: "#000",
    shadowOffset: { width: 4, height: 4 },
    shadowOpacity: 0.8,
    shadowRadius: 6,
    elevation: 10,
  },
  wrapper: {},
})
