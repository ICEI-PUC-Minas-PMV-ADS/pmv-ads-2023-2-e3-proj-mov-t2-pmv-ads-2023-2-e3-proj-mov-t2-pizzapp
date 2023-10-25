import { useNavigation } from "@react-navigation/native";

import { Container, Page } from "./style";

import { Header } from "@components/Header";
import { Button } from "@components/Button";
import { Input } from "@components/Input";


export function HomeClient() {
  const navigation = useNavigation();
  function building() {
    navigation.navigate("menuClient");
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
