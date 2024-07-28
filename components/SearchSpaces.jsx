import { View, StyleSheet, Image } from "react-native";
import React from "react";
import { Button, Surface, Title } from "react-native-paper";
import { Picker } from "@react-native-picker/picker";
import paw from "../assets/paw.png";
import { COLOR, GLOBAL } from "../global_styles";
import { DateTimePickerAndroid } from "@react-native-community/datetimepicker";
import { useForm } from "../hooks";

const optionsTypePet = [
  { label: "Gato", value: "CAT" },
  { label: "Perro", value: "DOG" },
];
const optionsGenderPet = [
  { label: "Hembra", value: "F" },
  { label: "Macho", value: "M" },
];
const optionsSizePet = [
  { label: "Pequeño", value: "SMALL" },
  { label: "Mediano", value: "MID" },
  { label: "Grande", value: "BIG" },
];

const optionsCity = [
  { label: "Formosa", value: "FORMOSA" },
  { label: "Clorinda", value: "CLORINDA" },
];

const SearchSpaces = () => {
  const { form, setForm, handleChange } = useForm({
    validations: {},
    initialValues: {
      start: new Date(),
      end: new Date(),
    },
  });

  const startDatePick = () => {
    DateTimePickerAndroid.open({
      value: form.start,
      onChange: (_e, date) => setForm("start", date),
      mode: "date",
    });
  };

  const endDatePick = () => {
    DateTimePickerAndroid.open({
      value: form.start,
      onChange: (_e, date) => setForm("end", date),
      mode: "date",
    });
  };

  return (
    <Surface elevation={2} style={style.search_spaces}>
      <Title style={style.search_title}>Busca espacios para tu mascota</Title>
      <View style={style.select_container}>
        <Picker
          mode="dropdown"
          style={style.select}
          selectedValue={form.role}
          onValueChange={(itemValue, _i) => setForm("role", itemValue)}
        >
          {optionsTypePet.map((item) => (
            <Picker.Item
              key={item.value}
              label={item.label}
              value={item.value}
            />
          ))}
        </Picker>
      </View>
      <View style={style.select_container}>
        <Picker style={style.select}>
          {optionsGenderPet.map((item) => (
            <Picker.Item
              key={item.value}
              label={item.label}
              value={item.value}
            />
          ))}
        </Picker>
      </View>
      <View style={style.select_container}>
        <Picker style={style.select}>
          {optionsSizePet.map(({ label, value }) => (
            <Picker.Item key={value} label={label} value={value} />
          ))}
        </Picker>
      </View>
      <View style={style.select_container}>
        <Picker style={style.select}>
          {optionsCity.map(({ label, value }) => (
            <Picker.Item key={value} label={label} value={value} />
          ))}
        </Picker>
      </View>
      <View style={GLOBAL.row}>
        <Button
          mode="contained"
          buttonColor={COLOR.primary}
          icon="calendar"
          onPress={startDatePick}
        >
          Fecha in
        </Button>
        <Button
          mode="contained"
          buttonColor={COLOR.primary}
          icon="calendar"
          onPress={endDatePick}
        >
          Fecha out
        </Button>
      </View>
      <Button mode="contained" buttonColor={COLOR.blue} icon={"paw"}>
        Buscar
      </Button>
      <Image source={paw} style={style.paw} />
    </Surface>
  );
};

const style = StyleSheet.create({
  paw: {
    height: 100,
    width: 100,
    position: "absolute",
    resizeMode: "contain",
    transform: [{ rotate: "90deg" }, { translateY: 15 }, { translateX: -15 }],
    top: 0,
    left: 0,
  },
  search_spaces: {
    alignItems: "center",
    justifyContent: "space-between",
    gap: 15,
    paddingTop: 50,
    paddingBottom: 25,
    overflow: "hidden",
    alignSelf: "center",
    width: "90%",
    height: 580,
    borderRadius: 15,
    backgroundColor: COLOR.appBackground,
  },
  select_container: {
    borderRadius: 50,
    width: "90%",
    alignItems: "center",
    alignSelf: "center",
    borderWidth: 1,
  },
  select: {
    width: "100%",
  },
  search_title: {
    fontWeight: "bold",
    fontSize: 16,
  },
});

export default SearchSpaces;
