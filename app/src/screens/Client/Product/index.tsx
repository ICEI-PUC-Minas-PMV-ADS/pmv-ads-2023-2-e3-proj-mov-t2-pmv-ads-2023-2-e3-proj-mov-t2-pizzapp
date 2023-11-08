import {
  ButtonContainer,
  DescriptionText,
  Form,
  NameText,
  Page,
  PriceText,
  Texto,
} from "./style";
import { Button } from "@components/Button";
import { useEffect, useState } from "react";
import { StraightHeader } from "@components/StraightHeader";
import { useNavigation } from "@react-navigation/native";
import { IGroups, getGroup } from "@providers/groups-services";
import { addProductToChart } from "@providers/chart-services";
import { Alert, Image } from "react-native";

export function ProductClient({ route }: any) {
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
      setGroup(response);
    });
  }, []);

  function handleCancel() {
    navigation.navigate("menuClient");
  }

  function handleAddProduct() {
    const message =  addProductToChart(product);
    console.log(message);
    // Alert.alert(message);
  }

  return (
    <Page>
      <StraightHeader />
      <Form>
        <Image
          source={{
            uri: product.image,
          }}
          style={{
            borderRadius: 50,
            width: 350,
            height: 150,
          }}
        ></Image>

        <NameText>{product.name}</NameText>
        <DescriptionText>{product.description}</DescriptionText>
        <PriceText size={32} color="primary">
          <PriceText size={20}>R$:</PriceText>
          {product.price.split(",")[0]}
          <PriceText size={20} color="primary">
            ,{product.price.split(",")[1]}
          </PriceText>
        </PriceText>
      </Form>
      <ButtonContainer>
        <Button size="MEDIUM" title="Voltar" onPress={handleCancel} />
        <Button
          size="MEDIUM"
          type="SECONDARY"
          title="Adicionar ao carrinho"
          onPress={handleAddProduct}
        />
      </ButtonContainer>
    </Page>
  );
}
