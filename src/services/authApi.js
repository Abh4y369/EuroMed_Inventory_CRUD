import { baseUrl} from "./baseUrl";
import { commonApi } from "./commonApi";

/*
  LOGIN USER
  json-server supports query filtering like:
  /users?email=test@gmail.com&password=123456

  It returns an array:
  [] -> invalid credentials
  [userObject] -> valid login
*/

export const loginUser = async (email, password) => {
  try {
    const response = await commonApi(
      "GET",
      `${baseUrl}/users?email=${email}&password=${password}`
    );

    return response;
  } catch (error) {
    console.error("Login API Error:", error);
    throw error;
  }
};