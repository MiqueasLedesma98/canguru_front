import { View, Text, StyleSheet, Pressable } from "react-native";
import React from "react";
import { COLOR, GLOBAL } from "../global_styles";
import house from "../assets/hospedaje.png";
import paw24 from "../assets/24h_paw.png";
import { Icon } from "react-native-paper";
import { useStateStore } from "../stores";

const ModeSelector = () => {
  const mode = useStateStore((state) => state.mode);
  const setMode = useStateStore((state) => state.setMode);

  return (
    <View
      style={[GLOBAL.row, { alignSelf: "center", gap: 30, marginVertical: 15 }]}
    >
      <Pressable
        style={[style.circle, mode ? style.lodgings : style.inactive]}
        android_ripple={{ color: COLOR.textWarning, radius: 61 }}
        onPress={() => setMode(true)}
      >
        <Icon source={house} size={50} />
        <Text style={{ fontFamily: "Neucha" }}>Hospedajes</Text>
      </Pressable>
      <Pressable
        android_ripple={{ color: COLOR.appBackground, radius: 61 }}
        style={[style.circle, !mode ? style.services : style.inactive]}
        onPress={() => setMode(false)}
      >
        <Icon source={paw24} size={50} />
        <Text
          style={{
            fontFamily: "Neucha",
            color: mode ? "#000" : COLOR.appBackground,
          }}
        >
          Servicios
        </Text>
      </Pressable>
    </View>
  );
};

const style = StyleSheet.create({
  circle: {
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
  lodgings: {
    backgroundColor: COLOR.primary,
  },
  services: {
    backgroundColor: COLOR.secondary,
    color: COLOR.appBackground,
  },
  inactive: {
    backgroundColor: COLOR.gray,
  },
});

export default ModeSelector;
