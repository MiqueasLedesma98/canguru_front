import "react-native-gesture-handler";
import { api } from "./axios";
import { GLOBAL } from "./global_styles";
import { NavigationContainer } from "@react-navigation/native";
import { navigationRef } from "./helpers";
import { PaperProvider, Text } from "react-native-paper";
import { useEffect } from "react";
import { useFonts } from "./hooks";
import { View } from "react-native";
import AppRoutes from "./router/AppNavigationRoutes";
import { useAuthStore } from "./stores";

export default function App() {
  const { fontsLoaded } = useFonts();

  const restoreSession = useAuthStore((state) => state.restoreSession);

  useEffect(() => {
    api.loadCredentials(restoreSession);
  }, []);

  if (!fontsLoaded)
    return (
      <View style={[GLOBAL.center, GLOBAL.screenContainer]}>
        <Text>CARGANDO... Por favor espere</Text>
      </View>
    );

  return (
    <NavigationContainer ref={navigationRef}>
      <PaperProvider>
        <AppRoutes />
      </PaperProvider>
    </NavigationContainer>
  );
}
