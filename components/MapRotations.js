import React from "react"
import { StyleSheet, Text, View, Dimensions } from "react-native"

import Swiper from "react-native-swiper"

const SCREEN_WIDTH = Dimensions.get("window").width

export default function MapRotations() {
  return (
    <View style={styles.container}>
      <Swiper
        style={styles.wrapper}
        // height={200}
        showsButtons={false}
        removeClippedSubviews={false}
        autoplayTimeout={3}
        autoplay={true}
      >
        <View style={styles.slide1}>
          <Text style={styles.text}>第一页</Text>
        </View>
        <View style={styles.slide2}>
          <Text style={styles.text}>第二页</Text>
        </View>
        <View style={styles.slide3}>
          <Text style={styles.text}>第三页</Text>
        </View>
      </Swiper>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    width: SCREEN_WIDTH,
    height: 250,
  },
  wrapper: {},
  slide1: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#9DD6EB",
  },
  slide2: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#97CAE5",
  },
  slide3: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#92BBD9",
  },
  text: {
    color: "#fff",
    fontSize: 30,
    fontWeight: "bold",
  },
})
