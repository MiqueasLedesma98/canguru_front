import React from "react";
import { Home, Shop, BookingClient, Profile } from "../screens";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { COLOR } from "../global_styles";
import { Icon } from "react-native-paper";

const BottomRoutes = {
  HOME: {
    name: "Home",
    Component: Home,
    icon: "home",
    label: "Inicio",
  },
  BOOKING: {
    name: "Reservas",
    Component: BookingClient,
    icon: "clock-time-eight",
    label: "Reservas",
  },
  SHOP: {
    name: "Shop",
    Component: Shop,
    icon: "shopping",
    label: "Tienda",
  },
  PROFILE: {
    Component: Profile,
    name: "profile",
    icon: "account",
    label: "Perfil",
  },
};

const Tab = createMaterialBottomTabNavigator();

const screens = BottomRoutes ? Object.values(BottomRoutes) : [];

const BottomNavigationRoutes = () => {
  return (
    <Tab.Navigator>
      {screens.map(({ Component, name, icon, label }) => (
        <Tab.Screen
          key={name}
          name={name}
          component={Component}
          options={{
            headerShown: false,
            tabBarLabel: label,
            tabBarIcon: ({ color }) => (
              <Icon color={color} source={icon} size={25} />
            ),
          }}
          barStyle={{ backgroundColor: COLOR.bgWarning }}
        />
      ))}
    </Tab.Navigator>
  );
};

export default BottomNavigationRoutes;
