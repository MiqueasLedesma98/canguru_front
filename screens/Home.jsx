import { View, Text, Image, StyleSheet } from "react-native";
import { GLOBAL } from "../global_styles";
import React from "react";

const Home = () => {
  return (
    <View style={[GLOBAL.screenContainer, GLOBAL.removePadding]}>
      <Image
        source={require("../assets/home-banner.png")}
        style={style.banner}
      />
      <Text>Logout</Text>
    </View>
  );
};

const style = StyleSheet.create({
  image: {
    resizeMode: "contain",
    width: "100%",
  },
});

export default Home;
