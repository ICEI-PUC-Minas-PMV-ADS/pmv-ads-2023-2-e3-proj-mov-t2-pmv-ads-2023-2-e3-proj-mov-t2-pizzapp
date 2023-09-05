import React from "react";
import { View } from "react-native";
import { Header } from "../../components/Header";
import { Button } from "../../components/Button";
import { Container, Page } from "./style";

export function Home() {
  const func = () => {
    console.log("Funcionou");
  };

  return (
    <Page>
      <Header />
      <Container>
        <Button title="Cliente" func={func} />
        <Button title="Funcionário" func={func} />
      </Container>
    </Page>
  );
}
