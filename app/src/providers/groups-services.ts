import axios from "axios";
import { enviroments } from "../enviroments/index";
export interface IGroups {
  id: number;
  name: string;
}

export async function getGroups(): Promise<IGroups[]> {
  const url = `${enviroments.baseUrl}/groups`;
  const groups = await axios.get(url).then((response) => {
    return response.data;
  });
  return groups;
}

export async function createGroup(name: string): Promise<IGroups> {
  const url = `${enviroments.baseUrl}/groups`;
  const group = await axios
    .post(url, { name })
    .then((response) => response.data);
  return group;
}