import React, { useEffect } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useAuthStore } from "../stores";
import { StackRoutes } from "./routes";
import { api } from "../axios";

const Stack = createNativeStackNavigator();

const screens = Object.values(StackRoutes);

const AppRoutes = () => {
  const authState = useAuthStore((state) => state.auth);
  const restoreSession = useAuthStore((state) => state.restoreSession);

  useEffect(() => {
    api.loadCredentials(restoreSession);
  }, []);

  return (
    <Stack.Navigator>
      {screens
        .filter(({ auth }) => (authState ? auth : !auth))
        .map(({ Component, auth, name, header }) => (
          <Stack.Screen
            key={name}
            name={name}
            options={{ headerShown: header }}
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
