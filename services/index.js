import { api } from "../axios";

const create_user = async (form) => {
  const { msg } = await api.POST("/auth/register", form);
  return msg;
};

const create_booking = async (form) => {
  const { booking } = await api.POST("/booking", form);
  return booking;
};

export { create_user, create_booking };
