import { Alert, Text, View } from "react-native";
import { Header } from "../../components/Header";
import { Container, Page } from "./style";
import { Button } from "@components/Button";
export function HomeAdmin() {
  function goToOrder() {
    Alert.alert("Pedidos", "Pedidos em construção");
    // navigation.navigate("order");
  }

  function goToMenu() {
    Alert.alert("Cardápio", "Cardápio em construção");
    // navigation.navigate("menu");
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
