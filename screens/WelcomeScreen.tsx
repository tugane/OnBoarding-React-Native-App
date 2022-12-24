import { Text, View } from "react-native";
import React from "react";
import FontSize from "../constants/FontSize";

const Welcome: React.FC = () => {
  return (
    <View>
      <Text
        style={{
          fontSize: FontSize.small,
        }}
      >
        Welcome
      </Text>
    </View>
  );
};

export default Welcome;
