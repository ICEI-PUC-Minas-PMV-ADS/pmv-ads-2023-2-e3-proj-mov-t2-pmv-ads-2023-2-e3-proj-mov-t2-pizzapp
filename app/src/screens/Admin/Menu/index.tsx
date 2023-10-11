import {
  Container,
  InputButton,
  Item,
  ItemText,
  List,
  Page,
  Texto,
} from "./style";
import { StraightHeader } from "@components/StraightHeader";
import { Button } from "@components/Button";
import { Input } from "@components/Input";

import { View } from "react-native";
import { useEffect, useState } from "react";
import {
  IGroups,
  createGroup,
  getGroups,
} from "../../../providers/groups-services";

export function MenuAdmin() {
  const [name, setName] = useState<string>("");
  const [groups, setGroups] = useState<IGroups[]>([]);

  function handleAddGroup() {
    createGroup(name).then((response) => {
      setGroups([...groups, response]);
      setName("");
    });
  }

  useEffect(() => {
    getGroups().then((response) => {
      console.log(response);
      setGroups(response);
    });
  }, []);
  return (
    <Page>
      <StraightHeader admin />
      <Container>
        <View>
          <Texto>Criar Grupo</Texto>
          <InputButton>
            <Input
              value={name}
              onChangeText={setName}
            />
            <Button size="SMALL" title="+" 
            onPress={handleAddGroup}
            />
          </InputButton>
        </View>

        <List
          data={groups}
          keyExtractor={(item: any) => item.id}
          renderItem={({ item }: any) => (
            <Item>
              <ItemText>{item.name}</ItemText>
            </Item>
          )}
        />
      </Container>
    </Page>
  );
}
