import { Container, InputButton, Page, Texto } from "./style";
import { StraightHeader } from "@components/StraightHeader";
import { Button } from "@components/Button";
import { Input } from "@components/Input";

import { View } from "react-native";

export function MenuAdmin() {
  return (
    <Page>
      <StraightHeader />

      <Container>
        <Texto>Aqui tem um lista</Texto>
        <InputButton>
          <Input />
          <Button size="SMALL" title="+" />
        </InputButton>
        <Button title="Fechar pedido" type="SECONDARY" />
      </Container>
    </Page>
  );
}
