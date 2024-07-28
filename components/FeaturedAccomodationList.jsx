import React from "react";
import { Title } from "react-native-paper";
import FeaturedAccommodationCard from "./FeaturedAccommodationCard";
import { StyleSheet } from "react-native";
import { FONT } from "../global_styles";

const FeaturedAccomodationList = () => {
  return (
    <>
      <Title style={[style.title, style.margin_title]}>
        Alojamientos Destacados
      </Title>
      {Array(4)
        .fill({})
        .map((_e, i) => (
          <FeaturedAccommodationCard key={i} />
        ))}
    </>
  );
};

const style = StyleSheet.create({
  title: {
    fontFamily: "Neucha",
    fontSize: FONT.giant,
    alignSelf: "center",
  },
  margin_title: {
    marginTop: 100,
    marginBottom: 30,
  },
});

export default FeaturedAccomodationList;
