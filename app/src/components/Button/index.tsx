import { ButtonProps, View } from "react-native";
import { StyledButton, StyledButtonText } from "./style";

interface IButtonProps extends ButtonProps {
  title: string;
  func: () => void;
}
export function Button(prop: IButtonProps) {
  return (
    <View>
      <StyledButton onPress={prop.func}>
        <StyledButtonText>{prop.title}</StyledButtonText>
      </StyledButton>
    </View>
  );
}
