import { useNavigation } from "@react-navigation/native";
import {
  BackButton,
  BackIcon,
  Highlight,
  StyledPizza,
  StyledSubtitle,
  StyledTitle,
} from "./style";
import { StyledHeader } from "./style";

type Props = {
  showBackButton?: boolean;
  admin?: boolean;
};
export function Header({ showBackButton = false, admin = false }: Props) {
  const navigation = useNavigation();
  const handleBack = () => {
    navigation.navigate("home");
  };
  return (
    <StyledHeader>
      {showBackButton && (
        <BackButton onPress={handleBack}>
          <BackIcon />
        </BackButton>
      )}
      <StyledPizza source={require("../../../assets/pizza.png")} />
      <StyledTitle admin={admin}>
        Pizz<Highlight>App</Highlight>
      </StyledTitle>
        {admin && <StyledSubtitle>Funcionário</StyledSubtitle>}
    </StyledHeader>
  );
}
