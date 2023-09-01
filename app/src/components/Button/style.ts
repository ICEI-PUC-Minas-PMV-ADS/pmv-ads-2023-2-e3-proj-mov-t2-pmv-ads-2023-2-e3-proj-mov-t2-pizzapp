import { StyleSheet } from "react-native";
import { colors } from "../../style/colors";

export const styles = StyleSheet.create({
    buttonText: {
        color: colors.pastel,
        fontSize: 24
      },
      button: {
        width: 280,
        height: 61,
        borderRadius: 10,
        backgroundColor:  colors.red,
        alignItems: 'center',
        justifyContent: 'center'
      },
});
