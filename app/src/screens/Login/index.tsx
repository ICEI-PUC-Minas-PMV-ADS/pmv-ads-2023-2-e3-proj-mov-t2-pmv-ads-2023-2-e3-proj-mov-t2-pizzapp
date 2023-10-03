import { Input } from "@components/Input";
import { Header } from "../../components/Header";
import { Container, Page } from "./style";
import { Button } from "@components/Button";
import { useNavigation } from "@react-navigation/native";
import { makeLogin } from "../../providers/login-services";
import { useState } from "react";
import { Alert } from "react-native";

export function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigation = useNavigation();

  function handleHomeAdmin() {
    navigation.navigate("homeAdmin");
  }

  async function handleLogin() {
    await makeLogin({ email, password }).then((response) => {
      if (response) {
        handleHomeAdmin();
      } else {
        Alert.alert("Erro no login", "Usuário ou senha inválidos");
      }
    });
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
          onChangeText={(text) => {
            setEmail(text);
          }}
        />
        <Input
          placeholder="Senha"
          secureTextEntry
          autoCorrect={false}
          autoCapitalize="none"
          onChangeText={(text) => {
            setPassword(text);
          }}
        />
        <Button title="Acessar" onPress={handleLogin} />
      </Container>
    </Page>
  );
}
