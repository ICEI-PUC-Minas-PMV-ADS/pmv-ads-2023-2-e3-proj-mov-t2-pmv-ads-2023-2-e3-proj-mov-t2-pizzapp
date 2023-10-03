import { Alert} from "react-native";
import { Container, Page } from "./style";
import { Button } from "@components/Button";
import { AppContext } from "@context/AppContext";
import { Header } from "@components/Header";
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
    <AppContext.Provider
      value={{
        admin: true,
      }}
    >
      <Page>
        <Header showBackButton/>
        <Container>
         
        </Container>
      </Page>
    </AppContext.Provider>
  );
}
