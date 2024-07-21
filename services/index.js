import { Alert } from "react-native";
import { api } from "../axios";

const create_user = async (form) => {
  const { msg } = api.POST("/auth/register", form);
  Alert.alert(msg);
  return msg;
};

const create_booking = async (form) => {
  const { booking } = await api.POST("/booking", form);

  if (booking) return booking;
  return booking;
};

export { create_user, create_booking };
