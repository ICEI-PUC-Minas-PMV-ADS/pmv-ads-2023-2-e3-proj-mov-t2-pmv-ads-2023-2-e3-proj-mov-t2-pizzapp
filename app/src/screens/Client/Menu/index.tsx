import {
  Container,
  DescriptionText,
  GroupButton,
  GroupText,
  Item,
  List,
  Page,
  PriceText,
  Product,
  ProductList,
  ProductText,
  Texto,
} from "./style";
import { StraightHeader } from "@components/StraightHeader";
import { Image, View } from "react-native";
import { useEffect, useState } from "react";
import {
  IGroups,
  getGroups,
} from "@providers/groups-services";
import { useNavigation } from "@react-navigation/native";
import {
  IProducts,
  getProductsByGroup,
} from "@providers/product-services";

export function MenuClient() {
  const [name, setName] = useState<string>("");
  const [groups, setGroups] = useState<IGroups[]>([]);
  const [products, setProducts] = useState<any[]>([]);

  const [openModals, setOpenModals] = useState<string[]>([]);

  const navigation = useNavigation();

  function createProduct( product?: IProducts) {
    navigation.navigate("productClient", {
      product,
    });
  }
  function toggleModal(groupId: string) {
    getProductsByGroup(groupId).then((response) => {
      setProducts(response);
    });
    setOpenModals((prevOpenModals) => {
      if (prevOpenModals.includes(groupId)) {
        return prevOpenModals.filter((id) => id !== groupId);
      } else {
        return [groupId];
      }
    });
  }

  useEffect(() => {
    getGroups().then((response) => {
      setGroups(response);
    });
  }, []);
  return (
    <Page>
      <StraightHeader />
      <Container>
        <List
          data={groups}
          keyExtractor={(item: any) => item.id}
          renderItem={({ item }: any) => (
            <Item>
              <GroupButton onPress={() => toggleModal(item.id)}>
                <GroupText>{item.name}</GroupText>
              </GroupButton>
              {openModals.includes(item.id) && (
                <ProductList
                  data={products}
                  keyExtractor={(item: any) => item.id}
                  renderItem={({ item }: any) => (
                    <Product
                      onPress={() => {
                        createProduct(item);
                      }}
                    >
                      <View>
                        <ProductText>{item.name}</ProductText>
                        <DescriptionText>{item.description}</DescriptionText>
                        <PriceText size={32} color="primary">
                          <PriceText size={20}>R$:</PriceText>
                          {item.price.split(",")[0]}
                          <PriceText size={20} color="primary">
                            ,{item.price.split(",")[1]}
                          </PriceText>
                        </PriceText>
                      </View>
                      <View>
                        <Image
                          source={{
                            uri: item.image,
                          }}
                          style={{ 
                            borderRadius: 10,
                            width: 120, height: 120 }}
                        />
                      </View>
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
