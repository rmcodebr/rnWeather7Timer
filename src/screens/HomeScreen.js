import React from "react";
import { View, Button, StyleSheet } from "react-native";
import BackgroundImage from "../components/BackgroundImage";

export default function HomeScreen({ navigation }) {
  return (
    <BackgroundImage>
      <View style={styles.container}>
        <Button
          title="Go to Screen A"
          onPress={() => navigation.navigate("ScreenA")}
        />
        <Button
          title="Go to Screen B"
          onPress={() => navigation.navigate("ScreenB")}
        />
      </View>
    </BackgroundImage>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
