import {
  View,
  Text,
  Image,
  StyleSheet,
  ScrollView,
  Pressable,
  Dimensions,
} from "react-native";
import { COLOR, FONT, GLOBAL } from "../global_styles";
import React from "react";
import { Button, Icon, Surface, Title } from "react-native-paper";
import paw from "../assets/paw.png";
import house from "../assets/hospedaje.png";
import paw24 from "../assets/24h_paw.png";
import { Picker } from "@react-native-picker/picker";
import { useForm } from "../hooks";
import { DateTimePickerAndroid } from "@react-native-community/datetimepicker";
import { FeaturedAccommodationCard } from "../components";

const {} = Dimensions.get("window");

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

const Home = () => {
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
    <ScrollView
      showsVerticalScrollIndicator={false}
      contentContainerStyle={[GLOBAL.screenContainer, GLOBAL.removePadding]}
    >
      <Image
        source={require("../assets/home-banner.png")}
        style={style.banner}
      />
      <Title style={style.title}>BIENESTAR A 4 PATAS</Title>
      <View
        style={[
          GLOBAL.row,
          { alignSelf: "center", gap: 30, marginVertical: 15 },
        ]}
      >
        <Pressable
          style={style.lodgings}
          android_ripple={{ color: COLOR.textWarning, radius: 61 }}
          onPress={() => {}}
        >
          <Icon source={house} size={50} />
          <Text style={{ fontFamily: "Neucha" }}>Hospedaje</Text>
        </Pressable>
        <Pressable
          android_ripple={{ color: COLOR.textWarning, radius: 61 }}
          style={style.services}
          onPress={() => {}}
        >
          <Icon source={paw24} size={50} />
          <Text style={{ fontFamily: "Neucha" }}>Hospedaje</Text>
        </Pressable>
      </View>
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
      <Title style={[style.title, style.margin_title]}>
        Alojamientos Destacados
      </Title>
      {Array(5)
        .fill({})
        .map((_e, i) => (
          <FeaturedAccommodationCard key={i} />
        ))}
    </ScrollView>
  );
};

const style = StyleSheet.create({
  image: {
    resizeMode: "contain",
    width: "100%",
  },
  title: {
    fontFamily: "Neucha",
    fontSize: FONT.giant,
    alignSelf: "center",
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
  paw: {
    height: 100,
    width: 100,
    position: "absolute",
    resizeMode: "contain",
    transform: [{ rotate: "90deg" }, { translateY: 15 }, { translateX: -15 }],
    top: 0,
    left: 0,
  },
  lodgings: {
    backgroundColor: COLOR.primary,
    alignItems: "center",
    justifyContent: "center",
    gap: 5,
    height: 125,
    width: 125,
    borderRadius: 75,
    borderWidth: 2,
    borderColor: "#000",
  },
  services: {
    backgroundColor: COLOR.gray,
    alignItems: "center",
    justifyContent: "center",
    gap: 5,
    height: 125,
    width: 125,
    borderRadius: 75,
    borderWidth: 2,
    borderColor: "#000",
  },
  margin_title: {
    marginTop: 100,
    marginBottom: 30,
  },
});

export default Home;
