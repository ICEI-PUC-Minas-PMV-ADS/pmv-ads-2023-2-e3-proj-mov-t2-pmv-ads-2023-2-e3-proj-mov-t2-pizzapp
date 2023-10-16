import {
  ButtonContainer,
  Container,
  CreateGroup,
  EditIcon,
  GroupButton,
  GroupText,
  IconButton,
  InputButton,
  Item,
  List,
  Page,
  PlusIcon,
  Product,
  ProductList,
  ProductText,
  Texto,
} from "./style";
import { StraightHeader } from "@components/StraightHeader";
import { Button } from "@components/Button";
import { Input } from "@components/Input";
import { Alert } from "react-native";
import { useEffect, useState } from "react";
import {
  IGroups,
  createGroup,
  getGroups,
} from "../../../providers/groups-services";
import { useNavigation } from "@react-navigation/native";

export function MenuAdmin() {
  const [name, setName] = useState<string>("");
  const [groups, setGroups] = useState<IGroups[]>([]);

  const [openModals, setOpenModals] = useState<string[]>([]);

  const navigation = useNavigation();

  function createProduct() {
    // navigation.navigate();
    
  }
  function toggleModal(groupId: string) {
    setOpenModals((prevOpenModals) => {
      if (prevOpenModals.includes(groupId)) {
        return prevOpenModals.filter((id) => id !== groupId);
      } else {
        return [groupId];
      }
    });
  }

  function handleAddGroup() {
    if (!name) {
      Alert.alert("Erro", "Nome do grupo não pode ser vazio");
      return;
    }
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
        <CreateGroup>
          <Texto>Criar Grupo</Texto>
          <InputButton>
            <Input value={name} onChangeText={setName} />
            <Button size="SMALL" title="+" onPress={handleAddGroup} />
          </InputButton>
        </CreateGroup>

        <List
          data={groups}
          keyExtractor={(item: any) => item.id}
          renderItem={({ item }: any) => (
            <Item>
              <GroupButton
                active={openModals.includes(item.id)}
                onPress={() => toggleModal(item.id)}
              >
                <GroupText>{item.name}</GroupText>
                {openModals.includes(item.id) && (
                  <ButtonContainer>
                    <IconButton>
                      <EditIcon />
                    </IconButton>
                    <IconButton>
                      <PlusIcon />
                    </IconButton>
                  </ButtonContainer>
                )}
              </GroupButton>
              {openModals.includes(item.id) && (
                <ProductList
                  data={item.products}
                  keyExtractor={(item: any) => item.id}
                  renderItem={({ item }: any) => (
                    <Product>
                      <ProductText>{item.name}</ProductText>
                    </Product>
                  )}
                />
              )}
            </Item>
          )}
        />
      </Container>
    </Page>
  );
}
