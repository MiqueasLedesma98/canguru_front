import { Login, Register, Home } from "../screens";

const Routes = {
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

export default Routes;
