import Signup from "components/auth/Signup";
import ConfirmSignup from "components/auth/ConfirmSignup";
import Login from "components/auth/Login";

const authRoutes = [
  {
    name: "signup",
    route: "/signup",
    component: Signup,
  },
  {
    name: "confirm_signup",
    route: "/confirm_signup",
    component: ConfirmSignup,
  },
  {
    name: "login",
    route: "/login",
    component: Login,
  }
];

export default authRoutes;
