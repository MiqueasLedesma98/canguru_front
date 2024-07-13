import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { APP_ROUTES } from "./routes";
import { useAuthStore } from "../stores";
import { screen_names } from "./screen_names";

const publicRoutes = [screen_names.LOGIN, screen_names.REGISTER];

const Stack = createNativeStackNavigator();

const AppRoutes = () => {
  const { auth } = useAuthStore();

  const isAuthenticated = false;

  return (
    <Stack.Navigator>
      {Object.entries(APP_ROUTES).map(([name, { Component, auth }]) => {
        if (isAuthenticated && publicRoutes.includes(name)) {
          return null;
        }

        return (
          <Stack.Screen
            key={name}
            name={name}
            component={Component}
            options={{
              headerShown: false,
            }}
            listeners={({ navigation }) => ({
              focus: () => {
                if (auth && !isAuthenticated) {
                  navigation.navigate(screen_names.LOGIN);
                }
              },
            })}
          />
        );
      })}
    </Stack.Navigator>
  );
};

export default AppRoutes;
