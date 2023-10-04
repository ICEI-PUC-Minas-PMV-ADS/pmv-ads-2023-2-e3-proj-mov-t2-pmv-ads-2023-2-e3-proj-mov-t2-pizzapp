import { TouchableOpacityProps } from "react-native";

import { ButtonTypeStyleProps, Container, Title } from "./style";

type Props = TouchableOpacityProps & {
  title: string;
  size?: "SMALL" | "MEDIUM" | "LARGE";
  type?: ButtonTypeStyleProps;
};
export function Button({ title, size = "LARGE", type = "PRIMARY", ...rest }: Props) {
  return (
    <Container size={size} type={type} {...rest}>
      <Title>{title}</Title>
    </Container>
  );
}
