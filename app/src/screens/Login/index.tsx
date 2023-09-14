import { Input } from "@components/Input";
import { Header } from "../../components/Header";
import { Container, Page } from "./style";
import { Button } from "@components/Button";
import { useNavigation } from "@react-navigation/native";

export function Login() {
  const navigation = useNavigation();

  function handleHomeAdmin() {
    navigation.navigate("homeAdmin");
  }
  return (
    <Page>
      <Header showBackButton admin />
      <Container>
        <Input
          placeholder="Email"
          keyboardType="email-address"
          autoCorrect={false}
          autoCapitalize="none"
        />
        <Input
          placeholder="Senha"
          secureTextEntry
          autoCorrect={false}
          autoCapitalize="none"
        />
        <Button title="Acessar" onPress={handleHomeAdmin} />
      </Container>
    </Page>
  );
}
