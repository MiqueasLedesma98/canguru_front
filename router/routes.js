import {
  Login,
  Register,
  RegisterSuccess,
  RecoverPassword,
  Details,
} from "../screens";

import DrawerNavigationRoutes from "./DrawerNavigationRoutes";

const StackRoutes = {
  LOGIN: {
    name: "Login",
    Component: Login,
    auth: false,
    header: false,
  },
  REGISTER: {
    name: "Registro",
    Component: Register,
    auth: false,
    header: true,
  },
  REGISTER_SUCCESS: {
    name: "Registro exitoso",
    Component: RegisterSuccess,
    auth: false,
    header: false,
  },
  RECOVER_PASS: {
    name: "Recuperar contraseña",
    Component: RecoverPassword,
    auth: false,
    header: true,
  },
  DRAWER_NAVIGATION: {
    name: "DRAWER_START",
    Component: DrawerNavigationRoutes,
    auth: true,
    header: false,
  },
  DETAILS: {
    name: "Espacio",
    Component: Details,
    auth: true,
    header: true,
  },
};

export { StackRoutes };
