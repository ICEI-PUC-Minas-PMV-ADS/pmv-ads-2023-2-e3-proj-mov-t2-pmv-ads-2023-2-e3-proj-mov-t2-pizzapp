import {
  createProductInGroup,
  editProductInGroup,
} from "../../../providers/product-services";
import {
  ButtonContainer,
  CreateGroup,
  Form,
  ImageIcon,
  InputButton,
  InputImage,
  Page,
  Texto,
} from "./style";
import { Input } from "@components/Input";
import { Button } from "@components/Button";
import { useEffect, useState } from "react";
import { StraightHeader } from "@components/StraightHeader";
import { useNavigation } from "@react-navigation/native";
import { IGroups, getGroup } from "../../../providers/groups-services";

export function ProductAdmin({ route }: any) {
  const navigation = useNavigation();
  const product = route.params.product ? route.params.product : {};
  const [group, setGroup] = useState<IGroups>(
    route.params.group ? route.params.group : {}
  );

  const groupId = route.params?.group?.id
    ? route.params.group.id
    : route.params.product?.groupId;

  useEffect(() => {
    getGroup(groupId).then((response) => {
      console.log(groupId);
      console.log(response);
      setGroup(response);
    });
  }, []);

  const [name, setName] = useState<string>(product.name ? product.name : "");
  const [description, setDescription] = useState<string>(
    product.description ? product.description : ""
  );
  const [price, setPrice] = useState<string>(
    product.price ? product.price : "0"
  );

  function handleCancel() {
    navigation.navigate("menuAdmin");
  }

  function handleAddProduct() {
    const newProduct = {
      id: product.id,
      name,
      description,
      price,
      groupId: product.groupId ? product.groupId : group.id,
    };

    if (product.id) {
      editProductInGroup(newProduct).then((response) => {
        console.log(response);
      });
      navigation.navigate("menuAdmin");
      return;
    }
    createProductInGroup(group.id, newProduct).then((response) => {
      console.log(response);
    });
    navigation.navigate("menuAdmin");
    return;
  }

  return (
    <Page>
      <StraightHeader admin />
      <Form>
        <Texto>Adicionando {group?.name} </Texto>
        <InputImage>
          <ImageIcon />
        </InputImage>
        <CreateGroup>
          <Texto>Nome do Item</Texto>
          <InputButton>
            <Input value={name} onChangeText={setName} />
          </InputButton>
        </CreateGroup>

        <CreateGroup>
          <Texto>Descrição</Texto>
          <InputButton>
            <Input value={description} onChangeText={setDescription} />
          </InputButton>
        </CreateGroup>

        <CreateGroup>
          <Texto>Preço</Texto>
          <InputButton>
            <Input value={price} onChangeText={setPrice} />
          </InputButton>
        </CreateGroup>
      </Form>
      <ButtonContainer>
        <Button size="MEDIUM" title="Cancelar" onPress={handleCancel} />
        <Button
          size="MEDIUM"
          type="SECONDARY"
          title="Salvar"
          onPress={handleAddProduct}
        />
      </ButtonContainer>
    </Page>
  );
}
