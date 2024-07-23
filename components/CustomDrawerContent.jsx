import React from "react";
import {
  DrawerContentScrollView,
  DrawerItem,
  DrawerItemList,
} from "@react-navigation/drawer";
import { useAuthStore } from "../stores";

const CustomDrawerContent = (props) => {
  const auth = useAuthStore();

  const handleLogout = () => auth.logout();

  return (
    <DrawerContentScrollView {...props}>
      <DrawerItemList {...props} />
      <DrawerItem label="Cerrar sesión" onPress={handleLogout} />
    </DrawerContentScrollView>
  );
};

export default CustomDrawerContent;
