import { View, StyleSheet, Pressable, Image, FlatList } from "react-native";
import React from "react";
import { Paragraph, Title } from "react-native-paper";
import pawn from "../assets/paw.png";
import { COLOR } from "../global_styles";

const categories = [
  { name: "Salud", img: require("../assets/health_pawn.png"), _id: "1" },
  { name: "Paseador", img: require("../assets/walker_dog.png"), _id: "2" },
  { name: "Entrenador", img: require("../assets/trainer.png"), _id: "3" },
  { name: "Otros", img: require("../assets/others_categories.png"), _id: "4" },
];

const keyExtractor = ({ _id }) => _id;

const Categories = () => {
  return (
    <View style={style.container}>
      <Image resizeMode="contain" source={pawn} style={style.pawn} />
      <Title>Categorias</Title>
      <FlatList
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={style.flatList}
        horizontal={true}
        data={categories}
        keyExtractor={keyExtractor}
        renderItem={({ item }) => (
          <Pressable
            style={style.pressable}
            android_ripple={{ color: COLOR.bgWarning, radius: 75 }}
          >
            <Image style={style.image} resizeMode="contain" source={item.img} />
            <Paragraph>{item.name}</Paragraph>
          </Pressable>
        )}
      />
    </View>
  );
};

const style = StyleSheet.create({
  pawn: {
    position: "absolute",
    width: 350,
    height: 350,
    left: 200,
    top: -100,
    zIndex: -1,
  },
  pressable: {
    justifyContent: "center",
    alignItems: "center",
    width: 90,
    height: 90,
    borderRadius: 25,
  },
  flatList: {
    height: 100,
    gap: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  container: {
    alignSelf: "center",
    width: "90%",
  },
  image: {
    width: 50,
    height: 50,
  },
  bolder: {
    fontWeight: 800,
  },
});

export default Categories;
