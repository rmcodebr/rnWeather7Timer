import React from "react";
import { View, Image } from "react-native";

const BackgroundImage = ({ children }) => {
  return (
    <View className="flex-1">
      <Image
        source={require("../../assets/img/weatherNight.png")}
        className="absolute h-full w-full opacity-30"
        resizeMode="cover"
      />
      {children}
    </View>
  );
};

export default BackgroundImage;
