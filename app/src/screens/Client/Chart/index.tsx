import {
  ButtonContainer,
  ChartList,
  DeleteButton,
  Item,
  NameText,
  Page,
  PriceText,
  Total,
  TotalText,
  TrashIcon,
} from "./style";
import { Button } from "@components/Button";
import { StraightHeader } from "@components/StraightHeader";
import { useNavigation } from "@react-navigation/native";
import { useEffect, useState } from "react";
import {
  getChart,
  removeProductFromChart,
} from "../../../providers/chart-services";
import { IProducts } from "../../../providers/product-services";
import { Alert } from "react-native";

export function Chart({ route }: any) {
  const navigation = useNavigation();
  const [chart, setChart] = useState<IProducts[]>([]);
  const [total, setTotal] = useState<string>('0,00');
  useEffect(() => {
    sumTotal();
    getChart().then((response) => {
      setChart(response);
    });
  }, []);


  function sumTotal (){
    let sum = 0;
    chart.forEach((item) => {
      sum += parseFloat(item.price);
    });
    setTotal(String(sum.toFixed(2).replace(".", ",")));
  }

  function handleDeleteProduct(product: IProducts) {
    console.log(product);
    Alert.alert(
      "Remover produto",
      `Deseja remover o ${product.name} do carrinho?`,
      [
        {
          text: "Cancelar",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel",
        },
        {
          text: "Remover",
          onPress: () =>
            removeProductFromChart(product).then((response) => {
              if (response) {
                setChart((prevChart) => {
                  return prevChart.filter((item) => item.id !== product.id);
                });
                sumTotal();
              }
            }),
        },
      ]
    );
  }
  return (
    <Page>
      <StraightHeader />
      <ChartList
        data={chart}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <Item>
            <NameText>{item.name}</NameText>
            <PriceText size={32} color="primary">
              <PriceText size={20}>R$:</PriceText>
              {item.price.split(",")[0]}
              <PriceText size={20} color="primary">
                ,{item.price.split(",")[1]}
              </PriceText>
            </PriceText>
            <DeleteButton
              onPress={() => {
                handleDeleteProduct(item);
              }}
            >
              <TrashIcon />
            </DeleteButton>
          </Item>
        )}
      />

      <Total>
        <TotalText>Total</TotalText>
        <PriceText size={32} color="primary">
              <PriceText size={20}>R$:</PriceText>
              {total.split(",")[0]}
              <PriceText size={20} color="primary">
                ,{total.split(",")[1]}
              </PriceText>
            </PriceText>
      </Total>
      <ButtonContainer>
        <Button type="SECONDARY" title="Fechar Pedido" />
      </ButtonContainer>
    </Page>
  );
}
