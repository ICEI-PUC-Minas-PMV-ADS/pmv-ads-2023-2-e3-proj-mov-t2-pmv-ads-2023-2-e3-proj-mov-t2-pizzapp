import { ButtonProps, Text, TouchableOpacity, View } from "react-native";
import { styles } from "./style";


interface IButtonProps extends ButtonProps {
    title: string;
    func: () => void;
}
export function Button(prop: IButtonProps) {
  return (
    <View>
      <TouchableOpacity style={styles.button} onPress={prop.func}>
        <Text style={styles.buttonText}>{prop.title}</Text>
      </TouchableOpacity>
    </View>
  );
}
