import { useNavigation } from "@react-navigation/native";

import { Container, Page } from "./style";

import { Header } from "@components/Header";
import { Button } from "@components/Button";
import { Input } from "@components/Input";
import { Alert } from "react-native";


export function HomeClient() {
  const navigation = useNavigation();
  function building() {
    Alert.alert("Cardápio", "Cardápio em construção");
    // navigation.navigate("menu");
  }
  return (
    <Page>
      <Header showBackButton />
      <Container>
        <Input
            placeholder="Informe o seu nome"
            autoCorrect={false}
        />
        <Input
            placeholder="Informe a sua mesa"
            autoCorrect={false}
            keyboardType="numeric"
            returnKeyType="done"
        />
        <Button title="Ver Cardápio" onPress={building} />
      </Container>
    </Page>
  );
}
