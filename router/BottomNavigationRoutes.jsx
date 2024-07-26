import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Home, Shop, BookingClient, Profile } from "../screens";

const BottomRoutes = {
  HOME: {
    name: "Home",
    Component: Home,
  },
  BOOKING: {
    name: "Reservas",
    Component: BookingClient,
  },
  SHOP: {
    name: "Shop",
    Component: Shop,
  },
  PROFILE: {
    Component: Profile,
    name: "Perfil",
  },
};

const Tab = createBottomTabNavigator();

const screens = BottomRoutes ? Object.values(BottomRoutes) : [];

const BottomNavigationRoutes = () => {
  return (
    <Tab.Navigator>
      {screens.map(({ Component, name }) => (
        <Tab.Screen
          key={name}
          name={name}
          component={Component}
          options={{ headerShown: false }}
        />
      ))}
    </Tab.Navigator>
  );
};

export default BottomNavigationRoutes;
