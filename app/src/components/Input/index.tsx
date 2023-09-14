import { TextInputProps, TextInput } from "react-native";
import { useTheme } from "styled-components/native";

import { Container } from "./styles";

type Props = TextInputProps & {
  inputRef?: React.RefObject<TextInput>;
};

export function Input({ ...rest }: Props) {
  const { COLORS } = useTheme();

  return <Container placeholderTextColor={COLORS.RED_DARK} {...rest} />;
}
