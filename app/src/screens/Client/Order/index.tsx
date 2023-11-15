import { useNavigation } from "@react-navigation/native";
import {
  OrderItem,
  OrderItemText,
  OrderList,
  OrderTitle,
  Page,
} from "./style";
import { StraightHeader } from "@components/StraightHeader";
import { useContext, useEffect, useState } from "react";
import { getOrderByName } from "@providers/order-services";
import { CustomerContext } from "@context/customer";
import { Text } from "react-native";
export function Order() {
  const navigation = useNavigation();
  const {
    name,
    table,
  } = useContext(CustomerContext)!;

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
      <OrderTitle>Meus Pedidos</OrderTitle>
      <Text>{name}</Text>
      {/* <Text>{order}</Text> */}

      <OrderList
        data={order}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <OrderItem
          >
            <OrderItemText>{item.status}</OrderItemText>
          </OrderItem>
        )}
      />
    </Page>
  );
}
