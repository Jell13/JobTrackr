import { getAccessToken } from "../lib/auth";

export const authHeaders = () => {
  const token = getAccessToken();
  return {
    "Content-Type": "application/json",
    Authorization: `Bearer ${token}`,
  };
};
