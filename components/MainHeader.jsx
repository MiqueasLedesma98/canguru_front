import { Appbar } from "react-native-paper";
import { getHeaderTitle } from "@react-navigation/elements";
import { DrawerActions } from "@react-navigation/native";
import { Image, StyleSheet, View } from "react-native";
import { COLOR, GLOBAL } from "../global_styles";

export default function MainHeader({ navigation, route, options, back }) {
  const title = getHeaderTitle(options, route.name);

  return (
    <Appbar.Header style={style.container}>
      {back ? <Appbar.BackAction onPress={navigation.goBack} /> : null}
      <Image source={require("../assets/Logo.png")} style={style.image} />
      <View style={GLOBAL.space} />
      <Appbar.Content title={title} titleStyle={style.title} />
      <View style={GLOBAL.space} />
      <Appbar.Action
        icon={"menu"}
        color="#000"
        onPress={() => navigation.dispatch(DrawerActions.openDrawer())}
      />
    </Appbar.Header>
  );
}

const style = StyleSheet.create({
  container: {
    backgroundColor: COLOR.primary,
  },
  title: {
    fontWeight: "bold",
    alignSelf: "center",
  },
  image: {
    resizeMode: "contain",
    width: 60,
    height: 60,
  },
});
