import { View, Text, StyleSheet, Dimensions, Image } from "react-native";
import React from "react";
import { COLOR, FONT, GLOBAL } from "../global_styles";
import checkmark from "../assets/checkmark.png";
import { Button } from "react-native-paper";
import screensNames from "../router/screensNames";

const { height, width } = Dimensions.get("window");

const RegisterSuccess = ({ navigation }) => {
  return (
    <View style={[GLOBAL.screenContainer, GLOBAL.center]}>
      <View style={[style.container, GLOBAL.center]}>
        <View style={GLOBAL.space} />
        <Text style={style.title}>¡Cuenta creada con exito!</Text>
        <View style={GLOBAL.space} />
        <Image source={checkmark} style={style.img} />
        <View style={GLOBAL.space} />
        <Button
          mode="contained"
          buttonColor={COLOR.secondary}
          textColor={COLOR.appBackground}
          onPressOut={() => navigation.navigate(screensNames.LOGIN)}
        >
          Volver
        </Button>
      </View>
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    height: height * 0.7,
    width: width * 0.9,
  },
  img: {
    resizeMode: "contain",
    width: width * 0.5,
    height: width * 0.5,
  },
  title: {
    fontSize: FONT.giant,
  },
  backgroundImg: {
    position: "absolute",
    top: height * 0.5,
    left: width * 0.5,
    width: 300,
    height: 300,
  },
});

export default RegisterSuccess;
