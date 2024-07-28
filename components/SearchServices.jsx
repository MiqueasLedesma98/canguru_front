import { View, StyleSheet } from "react-native";
import React from "react";
import { TextInput } from "react-native-paper";

const SearchServices = () => {
  return (
    <View style={style.container}>
      <TextInput
        mode="outlined"
        placeholder="Buscar"
        right={<TextInput.Icon icon="account-search" />}
      />
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    alignSelf: "center",
    marginVertical: 15,
    width: "90%",
  },
});

export default SearchServices;
