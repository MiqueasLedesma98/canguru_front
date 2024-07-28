import { Image, StyleSheet, ScrollView } from "react-native";
import { FONT, GLOBAL } from "../global_styles";
import React from "react";
import { Title } from "react-native-paper";
import {
  Categories,
  FeaturedAccomodationList,
  ModeSelector,
  SearchServices,
  SearchSpaces,
  Veterinarians,
} from "../components";
import { useStateStore } from "../stores";

const Home = () => {
  const mode = useStateStore((state) => state.mode);

  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      contentContainerStyle={[GLOBAL.screenContainer, GLOBAL.removePadding]}
    >
      <Image source={require("../assets/paw.png")} style={style.paw_big} />
      <Image
        source={require("../assets/home-banner.png")}
        style={style.banner}
      />
      <Title style={style.title}>BIENESTAR A 4 PATAS</Title>

      <ModeSelector />

      {mode ? (
        <>
          <SearchSpaces />
          <FeaturedAccomodationList />
        </>
      ) : (
        <>
          <SearchServices />
          <Categories />
          <Veterinarians />
        </>
      )}
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
  paw_big: {
    position: "absolute",
    top: 970,
    right: "20%",
    resizeMode: "contain",
    width: 200,
    height: 200,
    zIndex: 0,
  },
});

export default Home;
