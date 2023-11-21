import { useNavigation } from "@react-navigation/native";

import { Container, Page } from "./style";

import { Header } from "@components/Header";
import { Button } from "@components/Button";
import { Input } from "@components/Input";

import { useContext } from "react";
import { CustomerContext } from "@context/customer";

export function HomeClient() {
  const {
    name,
    table,
    handleChangeName,
    handleChangeTable,
  } = useContext(CustomerContext)!;
  
  const changeName = (value:string) => {
    handleChangeName(value);
  }

  const changeTable = (value:string) => {
   handleChangeTable(value);
  }
  
  const navigation = useNavigation();
  
  function building() {
    navigation.navigate("menuClient");
  }
  return (
    <CustomerContext.Provider value={({name,table,handleChangeName,handleChangeTable})}>
      <Page>
        <Header showBackButton />
        <Container>
          <Input
            placeholder="Informe o seu nome"
            autoCorrect={false}
            returnKeyType="next"          
            onChangeText={changeName}
          />
          <Input
            placeholder="Informe a sua mesa"
            autoCorrect={false}
            keyboardType="numeric"
            returnKeyType="done"
            onChangeText={changeTable}
          />
          <Button title="Ver Cardápio" onPress={building} />
        </Container>
      </Page>
    </CustomerContext.Provider>
  );
}
