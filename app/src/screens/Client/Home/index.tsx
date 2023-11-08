import { ThemeProvider, useNavigation } from "@react-navigation/native";

import { Container, Page } from "./style";

import { Header } from "@components/Header";
import { Button } from "@components/Button";
import { Input } from "@components/Input";
import { CustomerContext } from "@context/customer";
import { useContext, useEffect, useState } from "react";

export function HomeClient() {
  const [name, setName] = useState<string>("");
  const [table, setTable] = useState<string>("");
  const navigation = useNavigation();
  function building() {
    navigation.navigate("menuClient");
  }
  return (
    <CustomerContext.Provider value={{ name, table }}>
      <Page>
        <Header showBackButton />
        <Container>
          <Input
            placeholder="Informe o seu nome"
            autoCorrect={false}
            returnKeyType="next"
            onChangeText={(text) => setName(text)}
          />
          <Input
            placeholder="Informe a sua mesa"
            autoCorrect={false}
            keyboardType="numeric"
            returnKeyType="done"
            onChangeText={(text) => setTable(text)}
            
          />
          <Button title="Ver Cardápio" onPress={building} />
        </Container>
      </Page>
    </CustomerContext.Provider>
  );
}
