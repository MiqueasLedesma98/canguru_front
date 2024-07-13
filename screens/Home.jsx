import { View, Text, Pressable } from "react-native";
import { GLOBAL } from "../global_styles";
import React from "react";
import { useAuthStore } from "../stores";

const Home = () => {
  const { logout } = useAuthStore();

  return (
    <View style={[GLOBAL.screenContainer, GLOBAL.center]}>
      <Pressable onPress={logout}>
        <Text>Logout</Text>
      </Pressable>
    </View>
  );
};

export default Home;
