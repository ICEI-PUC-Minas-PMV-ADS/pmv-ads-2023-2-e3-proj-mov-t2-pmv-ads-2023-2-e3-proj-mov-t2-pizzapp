import React from "react";
import { Header } from "../../components/Header";
import { Button } from "../../components/Button";
import { Container, Page } from "./style";
import { useNavigation } from "@react-navigation/native";

export function Home() {
  const navigation = useNavigation();

  function handleHomeClient() {
    navigation.navigate("homeClient");
  }

  function handleHomeAdmin() {
    navigation.navigate("homeAdmin");
  }
  return (
    <Page>
      <Header />
      <Container>
        <Button title="Cliente" onPress={handleHomeClient} />
        <Button title="Funcionário" onPress={handleHomeAdmin} />
      </Container>
    </Page>
  );
}
