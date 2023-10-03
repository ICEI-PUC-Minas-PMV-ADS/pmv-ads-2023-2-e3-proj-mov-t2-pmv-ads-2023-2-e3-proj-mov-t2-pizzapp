import { Alert } from "react-native";
import { Container, Page } from "./style";
import { Button } from "@components/Button";
import { AppContext } from "@context/AppContext";
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
    <AppContext.Provider
      value={{
        admin: true,
      }}
    >
      <Page>
        <Header showBackButton />
        <Container>
          <Button title="Cardápio" onPress={goToMenu} />
          <Button title="Pedidos" onPress={goToOrder} />
        </Container>
      </Page>
    </AppContext.Provider>
  );
}
