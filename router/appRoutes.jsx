import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useAuthStore } from "../stores";
import Routes from "./routes";

const Stack = createNativeStackNavigator();

const screens = Object.entries(Routes);

const AppRoutes = () => {
  const authState = useAuthStore((state) => state.auth);

  return (
    <Stack.Navigator>
      {screens
        .filter(([_name, { auth }]) => (authState ? auth : !auth))
        .map(([name, { Component, auth }]) => (
          <Stack.Screen
            key={name}
            name={name}
            options={{ headerShown: false }}
            component={Component}
            listeners={({ navigation }) => ({
              focus: () => {
                if (auth && !authState) {
                  navigation.navigate(screen_names.LOGIN);
                }
              },
            })}
          />
        ))}
    </Stack.Navigator>
  );
};

export default AppRoutes;
