import axios from "axios";
import { enviroments } from "../enviroments/index";
export interface IGroups {
  id: string;
  name: string;
}

export async function getGroups(): Promise<IGroups[]> {
  const url = `${enviroments.baseUrl}/groups/`;
  const group = await axios.get(url).then((response) => {
    return response.data;
  });
  return group;
}

export async function getGroup(id?: string): Promise<IGroups> {
  const url = `${enviroments.baseUrl}/groups/${id}`;
  const group = await axios.get(url).then((response) => {
    return response.data;
  });
  const filtredGroup = group.filter((group: IGroups) => group.id == id);
  return filtredGroup[0];

}

export async function createGroup(name: string): Promise<IGroups> {
  const url = `${enviroments.baseUrl}/groups`;
  const group = await axios
    .post(url, { name })
    .then((response) => response.data);
  return group;
}
