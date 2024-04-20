import { DefaultInstance } from "../axios";

export const AuthRegister = async (param) => {
  const { data } = await DefaultInstance.post(`/auth/register`, param);
  return data;
};

export const Auth = async (param) => {
  const { data } = await DefaultInstance.post(`/auth`, param);
  return data;
};
