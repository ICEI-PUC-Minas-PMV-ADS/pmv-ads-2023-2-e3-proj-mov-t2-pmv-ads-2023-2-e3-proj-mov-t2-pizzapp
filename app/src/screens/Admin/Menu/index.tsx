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
} from "@providers/groups-services";
import { IProducts, getProductsByGroup } from "@providers/product-services";
import { useNavigation } from "@react-navigation/native";

export function MenuAdmin() {
  const [name, setName] = useState<string>("");
  const [groups, setGroups] = useState<IGroups[]>([]);
  const [products, setProducts] = useState<any[]>([]);

  const [openModals, setOpenModals] = useState<string[]>([]);

  const navigation = useNavigation();

  function createProduct(id: string, product?: IProducts) {
    navigation.navigate("productAdmin", {
      group: groups.find((group) => group.id === id),
      product,
    });
  }
  function toggleModal(groupId: string) {
    getProductsByGroup(groupId).then((response) => {
      setProducts(response);
    })
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
                    <IconButton
                      onPress={() => {
                        createProduct(item.id);
                      }}
                    >
                      <PlusIcon />
                    </IconButton>
                  </ButtonContainer>
                )}
              </GroupButton>
              {openModals.includes(item.id) && (
                <ProductList
                  data={products}
                  keyExtractor={(item: any) => item.id}
                  renderItem={({ item }: any) => (
                    <Product  onPress={() => {
                      createProduct(item.id, item);
                    }}>
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
