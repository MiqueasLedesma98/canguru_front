import { StyleSheet, Dimensions } from "react-native";
const { width, height } = Dimensions.get("window");

const COLOR = {
  primary: "#F0B418",
  secondary: "#7140FD",
  appBackground: "#FFFFFF",
  green: "#2DC071",
  red: "#FA6650",
  blue: "#2A7DB9",
  yellow: "#F3CD03",
  bgWarning: "#FEEBDD",
  textWarning: "#D07D42",
  gray: "#E5E5E5",
  secondaryGray: "#979797",
};

const FONT = {
  small: 14,
  medium: 16,
  large: 18,
  title: 22,
  giant: 30,
  bold: 600,
  regular: 500,
  normal: 400,
};

const GLOBAL = StyleSheet.create({
  screenContainer: {
    padding: 16,
    width,
    backgroundColor: COLOR.appBackground,
    minHeight: height,
  },
  center: {
    justifyContent: "center",
    alignItems: "center",
  },
  row: {
    flexDirection: "row",
    gap: 5,
  },
  space: {
    flex: 1,
    flexGrow: 1,
  },
  removePadding: {
    padding: 0,
  },
});

export { COLOR, FONT, GLOBAL };
