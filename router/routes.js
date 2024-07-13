import { Login, Register, Home } from "../screens";

const APP_ROUTES = {
  Login: {
    Component: Login,
    auth: false,
  },
  Register: {
    Component: Register,
    auth: false,
  },
  Home: {
    Component: Home,
    auth: true,
  },
};

export { APP_ROUTES };
