import { View, Text, StyleSheet, Pressable, ScrollView } from "react-native";
import React from "react";
import { GLOBAL, FONT, COLOR } from "../global_styles";
import { Button, Checkbox, Switch, TextInput } from "react-native-paper";
import { useForm } from "../hooks";
import { screen_names } from "../router/screen_names";
import { Picker } from "@react-native-picker/picker";
import { Dimensions } from "react-native";
import { create_user } from "../services";

const { height } = Dimensions.get("window");

const validations = {
  name: {
    check: (value) => value && value.length > 3,
    message: "El nombre debe tener al menos 3 caracteres",
  },
  lastName: {
    check: (value) => value && value.length > 3,
    message: "El apellido debe tener al menos 3 caracteres",
  },
  email: {
    check: (value) => value && /\S+@\S+\.\S+/.test(value),
    message: "Debes introducir un email válido",
  },
  password: {
    check: (value) => value && value.length >= 6,
    message: "Contraseña no válida",
  },
  checked: {
    check: (value) => value && value === "checked",
    message: "Debes aceptar nuestros terminos y condiciones para usar la app",
  },
  repeat: {
    check: (value) => value,
    equal: "password",
    message: "Las contraseñas deben coincidir",
  },
  role: {
    check: (value) => value && !!value,
    message: "",
  },
};

const Register = ({ navigation }) => {
  const { form, setForm, handleChange, errors } = useForm({
    validations,
    initialValues: {
      name: "",
      lastName: "",
      email: "",
      password: "",
      checked: "unchecked",
      role: "CLIENT",
    },
  });

  const handleSubmit = async () => {
    // TODO: Terminar el envio del formulario. EL componente como tal esta terminado
    const isReady =
      Object.keys(errors).length === 0 &&
      Object.values(form).every((field) => field && field.length > 0);

    if (isReady) {
      const msg = await create_user();
      if (msg) navigation.navigate(screen_names.REGISTER_SUCCESS);
    }
  };

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
          form={form.name}
          mode="outlined"
          placeholder="Nombre"
          onChangeText={handleChange("name")}
          error={!!errors.fullName}
          right={<TextInput.Icon icon={"account"} />}
        />
        {errors.fullName && <Text style={style.errorText}>{errors.name}</Text>}
        <TextInput
          form={form.lastName}
          mode="outlined"
          placeholder="Apellido"
          onChangeText={handleChange("lastName")}
          error={!!errors.fullName}
          right={<TextInput.Icon icon={"account"} />}
        />
        {errors.fullName && (
          <Text style={style.errorText}>{errors.lastName}</Text>
        )}
        <TextInput
          value={form.email}
          mode="outlined"
          placeholder="Correo electronico"
          onChangeText={handleChange("email")}
          error={!!errors.email}
          right={<TextInput.Icon icon={"email"} />}
        />
        {errors.email && <Text style={style.errorText}>{errors.email}</Text>}
        <TextInput
          value={form.password}
          error={!!errors.password}
          mode="outlined"
          placeholder="Contraseña"
          onChangeText={handleChange("password")}
          right={<TextInput.Icon icon={"eye"} />}
        />
        {errors.password && (
          <Text style={style.errorText}>{errors.password}</Text>
        )}
        <TextInput
          error={!!errors.password}
          mode="outlined"
          placeholder="Repetir contraseña"
          onChangeText={handleChange("repeat")}
          right={<TextInput.Icon icon={"eye"} />}
        />
        {errors.password && (
          <Text style={style.errorText}>{errors.repeat}</Text>
        )}
        <View style={style.switch_container}>
          <Picker
            style={{ width: 250 }}
            selectedValue={form.role}
            onValueChange={(itemValue, _i) => setForm("role", itemValue)}
          >
            <Picker.Item label="Cliente" value="CLIENT" />
            <Picker.Item label="Proveedor" value="PROVIDER" />
          </Picker>
        </View>
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
      <Button mode="contained" style={style.button} onPress={handleSubmit}>
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
  switch_container: {
    flexDirection: "row",
    justifyContent: "space-between",
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
