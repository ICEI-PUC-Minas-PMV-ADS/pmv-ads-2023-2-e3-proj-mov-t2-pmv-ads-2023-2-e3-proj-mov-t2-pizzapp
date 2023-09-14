import { useNavigation } from "@react-navigation/native";

import { Container, Page } from "./style";

import { Header } from "@components/Header";
import { Button } from "@components/Button";
import { Input } from "@components/Input";


export function HomeClient() {
  const navigation = useNavigation();
  function goToMenu() {
    navigation.navigate("menu");
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
        />
        <Button title="Ver Cardápio" onPress={goToMenu} />
      </Container>
    </Page>
  );
}
