export const authHeaders = () => {
  const token = localStorage.getItem("token");
  console.log(token);
  return {
    "Content-Type": "application/json",
    Authorization: `Bearer ${token}`,
  };
};
