import React from "react";
import { View, Text , Image } from "react-native";
import { styles } from "./style";

export function Header() {
  return (
    <View style={styles.header}>
      <Image style={styles.logo} source={require('../../../assets/pizza.png')} />
      <Text style={styles.title}>
        Pizz<Text style={styles.highlight}>App</Text>
      </Text>
    </View>
  );
}
