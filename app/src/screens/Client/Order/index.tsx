import { useNavigation } from "@react-navigation/native";
import {
  OrderItem,
  OrderItemText,
  OrderList,
  OrderTitle,
  Page,
  PriceText,
  StatusText,
} from "./style";
import { StraightHeader } from "@components/StraightHeader";
import { useContext, useEffect, useState } from "react";
import { getOrderByName } from "@providers/order-services";
import { CustomerContext } from "@context/customer";
import { Text } from "react-native";
import { TotalComponent } from "@components/Total";
export function Order() {
  const navigation = useNavigation();
  const { name, table } = useContext(CustomerContext)!;

  const [order, setOrder] = useState<any[]>([]);

  useEffect(() => {
    getOrderByName(name).then((response) => {
      console.log(response);
      setOrder(response);
    });
  }, []);

  return (
    <Page>
      <StraightHeader />
      <OrderTitle>Pedidos de {name}</OrderTitle>
      <OrderList
        data={order.products}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <OrderItem>
            <OrderItemText>{item.name}</OrderItemText>
            <PriceText size={32} color="primary">
              <PriceText size={20}>R$:</PriceText>
              {item.price.split(".")[0]}
              <PriceText size={20} color="primary">
                ,{item.price.split(".")[1]}
                {` x `}
                {item.quantity}
              </PriceText>
            </PriceText>
          </OrderItem>
        )}
      />
      <StatusText>
        Status:
        <StatusText color="red">{' '}{order.status}</StatusText>
      </StatusText>
      <TotalComponent total={order.total} />
    </Page>
  );
}
