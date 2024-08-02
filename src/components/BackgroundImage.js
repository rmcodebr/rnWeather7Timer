import React from "react";
import { View, Image, StyleSheet, Dimensions } from "react-native";

const { width, height } = Dimensions.get("window");

const BackgroundImage = ({ children }) => {
  return (
    <View style={styles.container}>
      <Image
        source={require("../../assets/img/weatherNight.png")} // Replace with your image URL or local asset
        style={styles.backgroundImage}
        resizeMode="cover"
      />
      {children}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backgroundImage: {
    position: "absolute",
    width: width,
    height: height,
    top: 0,
    left: 0,
  },
});
export default BackgroundImage;
