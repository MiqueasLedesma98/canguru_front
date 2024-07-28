import { Image, StyleSheet, View } from "react-native";
import React from "react";
import { COLOR } from "../global_styles";
import {
  Icon,
  IconButton,
  List,
  Paragraph,
  Surface,
  Text,
  Title,
} from "react-native-paper";

const VeterinariansCard = ({ name, description, price, location }) => {
  return (
    <Surface elevation={1} style={style.container}>
      <Image
        style={style.image}
        source={{ uri: "https://picsum.photos/400" }}
        resizeMode="contain"
        width={100}
        height={100}
      />
      <View style={style.content}>
        <Title>{name}</Title>
        <Paragraph>{description}</Paragraph>
        <List.Section style={style.section}>
          <List.Item
            titleStyle={style.item}
            title={price}
            left={() => <List.Icon icon={require("../assets/price.png")} />}
          />
          <List.Item
            titleStyle={style.item}
            title={location}
            left={() => <List.Icon icon={require("../assets/location.png")} />}
          />
        </List.Section>
      </View>
      <IconButton
        style={{ position: "absolute", right: 0, top: 35 }}
        icon={"arrow-right-drop-circle"}
        size={35}
        iconColor={COLOR.primary}
      />
    </Surface>
  );
};

const style = StyleSheet.create({
  container: {
    backgroundColor: COLOR.bgWarning,
    width: "100%",
    height: 130,
    borderRadius: 15,
    flexDirection: "row",
  },
  content: {
    marginVertical: 15,
  },
  item: { fontSize: 13, color: COLOR.textWarning },
  section: {
    flexDirection: "row",
    flexWrap: "nowrap",
  },
  image: { margin: 15, borderRadius: 25 },
});

export default VeterinariansCard;
