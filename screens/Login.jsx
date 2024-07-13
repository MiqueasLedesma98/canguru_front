import { Image, StyleSheet, View, Dimensions, Pressable } from "react-native";
import React, { useCallback } from "react";
import { GLOBAL, FONT, COLOR } from "../global_styles";
import { Button, Text, TextInput } from "react-native-paper";
import { useForm } from "../hooks";
import { screen_names } from "../router/screen_names";

const { width } = Dimensions.get("window");

const validations = {
  email: {
    check: (value) => /\S+@\S+\.\S+/.test(value),
    message: "Debes introducir un email válido",
  },
  password: {
    check: (value) => value.length >= 6,
    message: "Contraseña no válida",
  },
};

const Login = ({ navigation }) => {
  const { form, handleChange, errors } = useForm({
    validations,
    initialValues: { email: "", password: "" },
  });

  return (
    <View style={[GLOBAL.screenContainer, GLOBAL.center, style.screen]}>
      <View style={GLOBAL.space} />
      <View style={[style.logo_container, GLOBAL.center]}>
        <Image source={require("../assets/Logo.png")} style={style.logo} />
        <Text style={style.title}>CANGURU</Text>
      </View>
      <View style={GLOBAL.space} />
      <View style={style.form}>
        <TextInput
          mode="outlined"
          label="Correo electronico"
          value={form.email || ""}
          onChangeText={handleChange("email")}
          right={<TextInput.Icon icon={"email"} size={25} />}
          error={!!errors.email}
        />
        {errors.email && <Text style={style.errorText}>{errors.email}</Text>}
        <TextInput
          mode="outlined"
          label="Contraseña"
          value={form.password || ""}
          onChangeText={handleChange("password")}
          error={!!errors.password}
          right={<TextInput.Icon icon={"eye"} size={25} />}
          secureTextEntry
        />
        {errors.password && (
          <Text style={style.errorText}>{errors.password}</Text>
        )}
        <Button
          mode="contained"
          style={style.submit_button}
          onPress={() => navigation.navigate(screen_names.HOME)}
        >
          <Text style={style.submit_text}>Iniciar Sesión</Text>
        </Button>
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <Pressable>
            <Text style={style.pressable_text}>Olvido su contraseña</Text>
          </Pressable>
          <Pressable onPress={() => navigation.navigate(screen_names.REGISTER)}>
            <Text style={style.pressable_text}>
              No tienes cuenta con nosotros? Regístrate!
            </Text>
          </Pressable>
        </View>
      </View>
      <View style={GLOBAL.space} />
      <Image
        source={require("../assets/dog_login.png")}
        style={style.dog_footer}
      />
    </View>
  );
};

const style = StyleSheet.create({
  screen: {
    justifyContent: "space-between",
    paddingBottom: 0,
  },
  logo_container: {
    height: "auto",
  },
  logo: {
    width: width * 0.4,
    height: width * 0.4,
    resizeMode: "contain",
  },
  title: {
    fontFamily: "Neucha",
    fontSize: FONT.giant,
  },
  errorText: {
    color: "red",
    fontSize: 12,
    marginTop: 5,
  },
  form: {
    flexDirection: "column",
    gap: 10,
    width: "90%",
  },
  submit_text: {
    color: COLOR.appBackground,
  },
  submit_button: {
    backgroundColor: COLOR.red,
  },
  pressable_text: {
    fontSize: 12,
    fontFamily: "Neucha",
  },
});

export default Login;
