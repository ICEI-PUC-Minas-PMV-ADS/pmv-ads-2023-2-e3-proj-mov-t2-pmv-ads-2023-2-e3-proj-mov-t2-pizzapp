import axios from "axios";
import { enviroments } from "../enviroments/index";
interface IUser {
  email: string;
  password: string;
}

export async function makeLogin({ email, password }: IUser) {
  const url = `${enviroments.baseUrl}/users`;
  const users = await axios.get(url).then((response) => {
    return response.data;
  });

  const user = users.find((user: IUser) => user.email === email);

  if (user && user.password === password) {
    return user;
  } else {
    return false;
  }
}
