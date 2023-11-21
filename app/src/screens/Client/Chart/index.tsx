import {
  ButtonContainer,
  ChartList,
  DeleteButton,
  Item,
  ItemHeader,
  ItemContent,
  IncrementButton,
  DecrementButton,
  QuantityView,
  QuantityText,
  MinusIcon,
  NameText,
  Page,
  PlusIcon,
  PriceText,
  Total,
  TotalText,
  TrashIcon,
} from "./style";
import { Button } from "@components/Button";
import { StraightHeader } from "@components/StraightHeader";
import { useNavigation } from "@react-navigation/native";
import { useContext, useEffect, useState } from "react";
import {
  addProductToChart,
  getChart,
  removeOneProductFromChart,
  removeProductFromChart,
} from "@providers/chart-services";
import { Alert } from "react-native";
import { IProducts } from "@providers/product-services";
import { createOrder } from "@providers/order-services";
import { CustomerContext } from "@context/customer";
import { PriceComponent } from "@components/Price";

export function Chart() {
  const navigation = useNavigation();

  const { name, table } = useContext(CustomerContext)!;
  const [chart, setChart] = useState<IProducts[]>([]);
  const [total, setTotal] = useState<string>("0,00");
  useEffect(() => {
    sumTotal();
    getChart().then((response) => {
      setChart(response);
    });
  }, [chart]);

  function handleAddProduct(product: IProducts) {
    const message = addProductToChart(product);
  }

  function handleRemoveProduct(product: IProducts) {
    removeOneProductFromChart(product);
  }

  function sumTotal() {
    let sum = 0;
    chart.forEach((item) => {
      item.price = item.price?.replace(",", ".");
      sum += parseFloat(item.price) * item.quantity;
    });
    setTotal(String(sum.toFixed(2).replace(".", ",")));
  }

  function sumProduct({ price, quantity }: IProducts) {
    console.log(price, quantity);
    let sum = 0;
    sum = (parseFloat(price?.replace(",", ".")) * quantity)
      .toFixed(2)
      .replace(".", ",");
    return sum;
  }

  function handleOrder() {
    createOrder({
      products: chart,
      name: name,
      table: table,
      total: total,
    });
    Alert.alert(
      "Pedido Realizado",
      `Aguarde enquanto a cozinha prepara o seu pedido`,
      [
        {
          text: "Voltar ao menu",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel",
        },
        {
          text: "Acompanhar pedido",
          onPress: () => navigation.navigate("orderClient"),
        },
      ]
    );
  }

  function handleDeleteProduct(product: IProducts) {
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
            <ItemHeader>
              <NameText>{item.name}</NameText>

              <DeleteButton
                onPress={() => {
                  handleDeleteProduct(item);
                }}
              >
                <TrashIcon />
              </DeleteButton>
            </ItemHeader>
            <ItemContent>
              <QuantityView>
                <IncrementButton
                  onPress={() => {
                    handleAddProduct(item);
                  }}
                >
                  <PlusIcon />
                </IncrementButton>
                <QuantityText>{item.quantity}</QuantityText>
                <DecrementButton
                  onPress={() => {
                    handleRemoveProduct(item);
                  }}
                >
                  <MinusIcon />
                </DecrementButton>
              </QuantityView>
              <PriceComponent total={sumProduct(item)}></PriceComponent>
            </ItemContent>
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
        <Button type="SECONDARY" title="Fechar Pedido" onPress={handleOrder} />
      </ButtonContainer>
    </Page>
  );
}
