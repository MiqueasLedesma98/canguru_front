import {
  Image,
  StyleSheet,
  View,
  Dimensions,
  Pressable,
  ScrollView,
} from "react-native";
import React, { useState } from "react";
import { GLOBAL, FONT, COLOR } from "../global_styles";
import { Button, Text, TextInput } from "react-native-paper";
import { useForm } from "../hooks";
import useAuthStore from "../stores/useAuthStore";
import { LoadingModal } from "../components";
import paw from "../assets/paw.png";
import screensNames from "../router/screensNames";

const { width, height } = Dimensions.get("window");

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
  const [loading, setLoading] = useState(false);
  const { form, handleChange, errors } = useForm({
    validations,
    initialValues: { email: "", password: "" },
  });

  const loginStore = useAuthStore((state) => state.login);

  const handleSubmit = async () => {
    const isReady =
      Object.keys(errors).length === 0 && Object.values(form).every((e) => e);

    try {
      setLoading(true);
      if (!isReady) return;
      else {
        await loginStore(form);
      }
    } catch (error) {
      console.log(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <ScrollView
      keyboardShouldPersistTaps={"never"}
      contentContainerStyle={[
        GLOBAL.screenContainer,
        GLOBAL.center,
        style.screen,
      ]}
    >
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
          onPress={handleSubmit}
        >
          <Text style={style.submit_text}>Iniciar Sesión</Text>
        </Button>
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <Pressable
            onPress={() => navigation.navigate(screensNames.RECOVER_PASS)}
          >
            <Text style={style.pressable_text}>Olvidé mi contraseña</Text>
          </Pressable>
          <Pressable
            onPress={() => navigation.navigate(screensNames.REGISTER)}
          >
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
      <LoadingModal loading={loading} />
      <Image source={paw} style={style.backgroundImg} />
    </ScrollView>
  );
};

const style = StyleSheet.create({
  screen: {
    justifyContent: "space-between",
    paddingBottom: 0,
    minHeight: height,
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
    gap: 15,
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
  backgroundImg: {
    position: "absolute",
    top: height * 0.3,
    left: width * 0.4,
    width: 300,
    height: 300,
    zIndex: -1,
  },
});

export default Login;
