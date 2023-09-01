import React from "react";
import { View } from "react-native";
import { Header } from "../../components/Header";
import { Button } from "../../components/Button";
import { styles } from "./style";

export function Home() {
  const func = () => {
    console.log("Funcionou");
  };


  return (
    <View >
      <Header />
      <View style={styles.select}>
        <Button title="Cliente" func={func} />
        <Button title="Funcionário" func={func} />
      </View>
    </View>
  );
}
