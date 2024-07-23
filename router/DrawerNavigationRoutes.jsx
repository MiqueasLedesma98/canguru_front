import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { MainHeader, CustomDrawerContent } from "../components";
import { Home } from "../screens";
import { useAuthStore } from "../stores";

const DrawerRoutes = {
  HOME: {
    name: "Inicio",
    Component: Home,
    auth: true,
    header: true,
  },
};

const Drawer = createDrawerNavigator();

const screens = DrawerRoutes ? Object.values(DrawerRoutes) : [];

const DrawerNavigationRoutes = () => {
  const authState = useAuthStore((state) => state.auth);

  return (
    <Drawer.Navigator
      drawerContent={(props) => <CustomDrawerContent {...props} />}
    >
      {screens.map(({ Component, auth, name, header }) => (
        <Drawer.Screen
          key={name}
          name={name}
          component={Component}
          options={{
            headerShown: header,
            header: (props) => <MainHeader {...props} />,
          }}
          listeners={({ navigation }) => ({
            focus: () => {
              if (auth && !authState) {
                navigation.navigate(screen_names.LOGIN);
              }
            },
          })}
        />
      ))}
    </Drawer.Navigator>
  );
};

export default DrawerNavigationRoutes;
