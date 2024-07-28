import React, { useEffect } from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { MainHeader, CustomDrawerContent } from "../components";
import { useNavigationStore } from "../stores";
import BottomNavigationRoutes from "./BottomNavigationRoutes";
import { Settings } from "../screens";

const DrawerRoutes = {
  HOME: {
    name: "Inicio",
    Component: BottomNavigationRoutes,
    header: true,
  },
  SETTINGS: {
    name: "Configuración",
    Component: Settings,
    header: true,
  },
};

const Drawer = createDrawerNavigator();

const screens = DrawerRoutes ? Object.values(DrawerRoutes) : [];

const DrawerNavigationRoutes = ({ navigation }) => {
  const setNavigationStack = useNavigationStore(
    (state) => state.setStackNavigation
  );

  useEffect(() => {
    setNavigationStack(navigation);
    return () => setNavigationStack(null);
  }, [navigation]);

  return (
    <Drawer.Navigator
      drawerContent={(props) => (
        <CustomDrawerContent {...props} stackNavigation={navigation} />
      )}
    >
      {screens.map(({ Component, name, header }) => (
        <Drawer.Screen
          key={name}
          name={name}
          component={Component}
          options={{
            headerShown: header,
            header: (props) => <MainHeader {...props} />,
          }}
        />
      ))}
    </Drawer.Navigator>
  );
};

export default DrawerNavigationRoutes;
