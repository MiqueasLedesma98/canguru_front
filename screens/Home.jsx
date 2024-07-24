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

const Home = () => {
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
        <Button mode="contained" buttonColor={COLOR.blue} icon={"paw"}>
          Buscar
        </Button>
        <Image source={paw} style={style.paw} />
      </Surface>
      <Title style={[style.title, style.margin_title]}>
        Alojamientos Destacados
      </Title>
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
    height: 500,
    borderRadius: 15,
    backgroundColor: COLOR.appBackground,
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
