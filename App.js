import { PaperProvider, Text } from "react-native-paper";
import { NavigationContainer } from "@react-navigation/native";
import AppRoutes from "./router/AppRoutes";
import { View } from "react-native";
import { GLOBAL } from "./global_styles";
import { navigationRef } from "./helpers";
import { useFonts } from "./hooks";

export default function App() {
  const { fontsLoaded } = useFonts();

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
