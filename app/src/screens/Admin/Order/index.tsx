import {
  CheckIcon,
  ChecksIcon,
  GroupButton,
  GroupText,
  Item,
  Page,
  Product,
  ProductList,
  ProductText,
} from "./style";
import { StraightHeader } from "@components/StraightHeader";
import { useContext, useEffect, useState } from "react";
import { IOrder, getOrderByName, getOrders } from "@providers/order-services";
import { CustomerContext } from "@context/customer";
import { List } from "phosphor-react-native";
import { FlatList, Text } from "react-native";
export function OrderAdmin() {
  const { name } = useContext(CustomerContext);
  const [openModals, setOpenModals] = useState<string[]>([]);

  const [orders, setOrders] = useState<IOrder[]>([]);

  function toggleModal(groupId: string) {
    setOpenModals((prevOpenModals) => {
      if (prevOpenModals.includes(groupId)) {
        return prevOpenModals.filter((id) => id !== groupId);
      } else {
        return [groupId];
      }
    });
  }

  useEffect(() => {
    getOrders().then((response) => {
      console.log(response);
      setOrders(response);
    });
  }, []);

  return (
    <Page>
      <StraightHeader admin />
      <FlatList
        data={orders}
        keyExtractor={(item: any) => item.id}
        renderItem={({ item }: any) => (
          <Item>
            <GroupButton
              orderStats={item.status}
              active={openModals.includes(item.id)}
              onPress={() => toggleModal(item.id)}
            >
              <GroupText
              orderStats={item.status}
              >Mesa {item.table} </GroupText>
              {item.status === "pending" ? <CheckIcon /> : <ChecksIcon />}
            
            </GroupButton>
            {openModals.includes(item.id) && (
              <ProductList
                data={item.products}
                keyExtractor={(item: any) => item.id}
                renderItem={({ item }: any) => (
                  <Product
                  // onPress={() => createProduct(item.id, item);}
                  >
                    <ProductText>
                      {item.quantity} x {item.name}{" "}
                    </ProductText>
                  </Product>
                )}
              />
            )}
          </Item>
        )}
      />
    </Page>
  );
}
