import { Alert } from "react-native";
import { Container, Page } from "./style";
import { Button } from "@components/Button";
import { Header } from "@components/Header";
import { useNavigation } from "@react-navigation/native";


export function HomeAdmin() {
  const navigation = useNavigation();
  function goToOrder() {
    Alert.alert("Pedidos", "Pedidos em construção");
    // navigation.navigate("order");
  }

  function goToMenu() {
    navigation.navigate("menuAdmin");
  }

  return (
      <Page>
      <Header showBackButton admin />
      <Container>
        <Button title="Cardápio" onPress={goToMenu} />
        <Button title="Pedidos" onPress={goToOrder} />
      </Container>
    </Page>
  );
}
