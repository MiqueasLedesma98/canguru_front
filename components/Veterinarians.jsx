import { View, StyleSheet, Pressable } from "react-native";
import React from "react";
import VeterinariansCard from "./VeterinariansCard";
import { Title } from "react-native-paper";
import { COLOR, GLOBAL } from "../global_styles";

const data = [
  {
    name: "Dr. Mario Sandoval",
    description: "Dentista veterinario",
    price: 750000,
    location: "BOGOTA",
  },
  {
    name: "Dra. Cristina Villa",
    description: "Veterinaria especializada",
    price: 125000,
    location: "BOGOTA",
  },
];

const Veterinarians = () => {
  return (
    <View style={style.container}>
      <View style={[GLOBAL.row, style.header]}>
        <Title>Veterinarias</Title>
        <Pressable>
          <Title style={style.pressable_text}>Ver Todos</Title>
        </Pressable>
      </View>
      {data.map((props) => (
        <VeterinariansCard key={props.name} {...props} />
      ))}
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    gap: 15,
    marginVertical: 25,
    width: "95%",
    alignSelf: "center",
  },
  header: {
    justifyContent: "space-between",
    marginHorizontal: "2.5%",
  },
  pressable_text: { fontWeight: 600, color: COLOR.secondaryGray },
});

export default Veterinarians;
