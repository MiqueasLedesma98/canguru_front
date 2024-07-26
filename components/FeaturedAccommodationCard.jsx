import React from "react";
import { Card, Icon, Text } from "react-native-paper";
import { COLOR, GLOBAL } from "../global_styles";
import { StyleSheet } from "react-native";

const FeaturedAccommodationCard = () => {
  return (
    <Card elevation={1} style={style.container}>
      <Card.Cover source={{ uri: "https://picsum.photos/700" }} />
      <Card.Title title="Jardin de Mascotas" />
      <Card.Content style={[GLOBAL.row]}>
        {Array(5)
          .fill({})
          .map((_e, index) => (
            <Icon key={index} source={"star"} size={18} color={COLOR.yellow} />
          ))}
      </Card.Content>
      <Card.Content>
        <Text>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quia,
          doloribus nisi est illum explicabo laborum at molestiae ipsum unde
          vero.
        </Text>
      </Card.Content>
    </Card>
  );
};

const style = StyleSheet.create({
  container: {
    width: "90%",
    alignSelf: "center",
    marginVertical: 25,
    backgroundColor: COLOR.appBackground,
  },
  content: {
    justifyContent: "center",
  },
});

export default FeaturedAccommodationCard;
