import { View, Text, StyleSheet, Pressable, ScrollView } from "react-native";
import React from "react";
import { GLOBAL, FONT, COLOR } from "../global_styles";
import { Button, Checkbox, TextInput } from "react-native-paper";
import { useForm } from "../hooks";
import { screen_names } from "../router/screen_names";
import { Dimensions } from "react-native";

const { height } = Dimensions.get("screen");

const validations = {
  fullName: {
    check: (value) => value.length > 3,
    message: "El nombre debe tener al menos 3 caracteres",
  },
  email: {
    check: (value) => /\S+@\S+\.\S+/.test(value),
    message: "Debes introducir un email válido",
  },
  password: {
    check: (value) => value.length >= 6,
    message: "Contraseña no válida",
  },
  checked: {
    check: (value) => value === "checked",
    message: "Debes aceptar nuestros terminos y condiciones para usar la app",
  },
};

const Register = ({ navigation }) => {
  const { form, setForm, handleChange, errors } = useForm({
    validations,
    initialValues: {
      fullName: "",
      email: "",
      password: "",
      checked: "unchecked",
    },
  });

  return (
    <ScrollView
      keyboardShouldPersistTaps={"handled"}
      contentContainerStyle={[GLOBAL.screenContainer, style.scroll_view]}
    >
      <View style={GLOBAL.space} />
      <Text style={[style.title]}>Crear Nueva Cuenta</Text>
      <View style={GLOBAL.space} />
      <Text>
        El agua es vida. El agua es una necesidad humana básica. En diversas
        líneas de vida, los humanos necesitamos agua.
      </Text>
      <View style={GLOBAL.space} />
      <View style={[style.form]}>
        <TextInput
          mode="outlined"
          placeholder="Nombre completo"
          onChangeText={handleChange("fullName")}
          error={!!errors.fullName}
          right={<TextInput.Icon icon={"account"} />}
        />
        {errors.fullName && (
          <Text style={style.errorText}>{errors.fullName}</Text>
        )}
        <TextInput
          mode="outlined"
          placeholder="Correo electronico"
          onChangeText={handleChange("email")}
          error={!!errors.email}
          right={<TextInput.Icon icon={"email"} />}
        />
        {errors.email && <Text style={style.errorText}>{errors.email}</Text>}
        <TextInput
          error={!!errors.password}
          mode="outlined"
          placeholder="Contraseña"
          onChangeText={handleChange("password")}
          right={<TextInput.Icon icon={"eye"} />}
        />
        {errors.password && (
          <Text style={style.errorText}>{errors.password}</Text>
        )}
        <View style={style.check_container}>
          <Checkbox
            status={form.checked}
            onPress={() =>
              setForm(
                "checked",
                form.checked === "unchecked" ? "checked" : "unchecked"
              )
            }
          />
          <Pressable
            role="button"
            onPress={() =>
              setForm(
                "checked",
                form.checked === "unchecked" ? "checked" : "unchecked"
              )
            }
          >
            <Text style={{ fontSize: FONT.small - 2, flexWrap: "wrap" }}>
              Acepto los Terminos, condiciones y Politicas de privacidad
            </Text>
          </Pressable>
        </View>
      </View>
      <View style={GLOBAL.space} />
      <Pressable onPress={() => navigation.navigate(screen_names.LOGIN)}>
        <Text style={style.already_have_text}>
          ¿Ya tienes una cuenta? Iniciar Sesión
        </Text>
      </Pressable>
      <View style={GLOBAL.space} />
      <Button mode="contained" style={style.button}>
        Registrarse
      </Button>
      <View style={GLOBAL.space} />
    </ScrollView>
  );
};

const style = StyleSheet.create({
  title: {
    fontSize: FONT.giant * 1.4,
    fontWeight: FONT.bold,
  },
  sub_title: FONT.medium,
  form: {
    marginVertical: 20,
    width: "100%",
    gap: 25,
  },
  check_container: {
    flexDirection: "row",
    gap: 5,
    alignItems: "center",
  },
  button: {
    backgroundColor: COLOR.secondary,
  },
  already_have_text: {
    textAlign: "center",
  },
  errorText: {
    color: "red",
    fontSize: 12,
  },
  scroll_view: {
    minHeight: height,
  },
});

export default Register;
