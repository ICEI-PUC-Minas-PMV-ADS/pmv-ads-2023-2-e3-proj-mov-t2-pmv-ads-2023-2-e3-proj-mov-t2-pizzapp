import { Alert} from "react-native";
import { Container, Page } from "./style";
import { Button } from "@components/Button";
import { Header } from "@components/Header";
import { StraightHeader } from "@components/StraightHeader";
export function MenuAdmin() {
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
        <StraightHeader showBackButton admin/>
        <Container>
          
         
        </Container>
      </Page>
  );
}
