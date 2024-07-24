import {
  View,
  Text,
  Image,
  StyleSheet,
  Pressable,
  ScrollView,
} from "react-native";
import React from "react";
import { COLOR, FONT, GLOBAL } from "../global_styles";
import paw from "../assets/paw.png";
import logo from "../assets/Logo.png";
import dog from "../assets/dog_login.png";
import { Button, Paragraph, TextInput, Title } from "react-native-paper";
import screensNames from "../router/screensNames";

const RecoverPassword = ({ navigation }) => {
  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      keyboardShouldPersistTaps={"handled"}
      contentContainerStyle={[
        GLOBAL.screenContainer,
        GLOBAL.center,
        style.screen,
      ]}
    >
      <Image source={paw} style={style.paw} />
      <Image source={logo} style={style.logo} />
      <View style={style.form}>
        <Title style={style.title}>Olvidaste tu Contraseña</Title>
        <Paragraph>
          No te preocupes, nos pasa a todos. Indicanos tu correo electronico
          para enviarte las instrucciones y ayudarte a recuperar tu contraseña
        </Paragraph>
        <View style={GLOBAL.space} />
        <TextInput
          style={{ width: "100%" }}
          placeholder="Introduzca su email"
          mode="outlined"
          right={<TextInput.Icon icon={"email"} />}
        />
        <View style={GLOBAL.space} />
        <Button mode="contained" buttonColor={COLOR.blue}>
          Recuperar Contraseña
        </Button>
        <View style={[GLOBAL.row]}>
          <Text>Tienes una cuenta?</Text>
          <Pressable onPress={() => navigation.navigate(screensNames.LOGIN)}>
            <Text style={{ color: COLOR.primary, fontWeight: FONT.bold }}>
              Login
            </Text>
          </Pressable>
        </View>
      </View>
      <Image source={dog} />
    </ScrollView>
  );
};

const style = StyleSheet.create({
  screen: {
    paddingTop: 25,
    paddingBottom: 0,
    justifyContent: "space-between",
  },
  title: {
    fontSize: FONT.giant,
    fontWeight: FONT.bold,
  },
  paw: {
    position: "absolute",
    top: "30%",
    right: 0,
    resizeMode: "contain",
  },
  logo: {
    resizeMode: "contain",
    width: 100,
    height: 100,
  },
  form: {
    zIndex: 2,
    gap: 15,
    alignItems: "center",
    alignSelf: "center",
    width: "90%",
    height: "65%",
  },
  dog: {},
});

export default RecoverPassword;
