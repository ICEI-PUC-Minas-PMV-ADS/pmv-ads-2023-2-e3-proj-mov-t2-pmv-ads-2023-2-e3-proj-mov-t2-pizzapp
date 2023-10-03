import axios from "axios";

interface IUser {
  email: string;
  password: string;
}

export async function makeLogin({ email, password }: IUser) {
  const url = "http://10.0.2.2:3000/users";
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
