import { Appbar } from "react-native-paper";
import { getHeaderTitle } from "@react-navigation/elements";
import { DrawerActions } from "@react-navigation/native";
import { Image, StyleSheet, View } from "react-native";
import { COLOR, FONT, GLOBAL } from "../global_styles";
import { useStateStore } from "../stores";

export default function MainHeader({ navigation, route, options, back }) {
  const title = getHeaderTitle(options, route.name);
  const mode = useStateStore((state) => state.mode);

  return (
    <Appbar.Header
      style={[
        style.container,
        { backgroundColor: mode ? COLOR.primary : COLOR.secondary },
      ]}
    >
      {back ? <Appbar.BackAction onPress={navigation.goBack} /> : null}
      <Image source={require("../assets/Logo.png")} style={style.image} />
      <View style={GLOBAL.space} />
      <Appbar.Content
        title={title}
        titleStyle={[style.title, { color: COLOR.appBackground }]}
      />
      <View style={GLOBAL.space} />
      <Appbar.Action
        icon={"menu"}
        color="#fff"
        size={50}
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
    fontSize: FONT.giant,
    alignSelf: "center",
    fontFamily: "Neucha",
  },
  image: {
    resizeMode: "contain",
    width: 60,
    height: 60,
  },
});
