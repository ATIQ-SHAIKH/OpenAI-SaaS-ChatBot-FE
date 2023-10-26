import axios from "axios";

export const loginUser = async (email, password) => {
  const response = await axios.post("/user/login", { email, password });
  if (response.status !== 200) {
    throw new Error("Unable to login!");
  } else return response.data;
};
