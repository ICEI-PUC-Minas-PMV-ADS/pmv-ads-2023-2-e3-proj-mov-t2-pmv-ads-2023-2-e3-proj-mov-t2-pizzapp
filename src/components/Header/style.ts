import { StyleSheet } from "react-native";
import { colors } from "../../style/colors";

export const styles = StyleSheet.create({
  header: {
    gap: 25,
    alignItems: "center",
  },
  title: {
    fontWeight: "bold",
    fontSize: 40,
    color: colors.darkGreen,
  },
  highlight: {
    color: colors.red,
  },
  logo: {
    width: 248,
    height: 248,
  },
});
