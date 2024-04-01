import axios from "axios";

export const loginApi = async (username: string, password: string) => {
  try {
    const params = {
      method: "POST",
      url: "http://localhost:3000/login",
      data: {
        username,
        password,
      },
    };
    return await axios(params).then((res) => {
      console.log(res);
      return res.data.authorization;
    });
  } catch (error) {
    throw new Error("Failed to login");
  }
};
