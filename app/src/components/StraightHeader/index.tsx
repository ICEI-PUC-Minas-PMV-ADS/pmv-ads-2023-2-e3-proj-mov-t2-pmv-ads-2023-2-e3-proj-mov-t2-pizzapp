import { useNavigation } from "@react-navigation/native";
import {
  Button,
  BackIcon,
  StyledPizza,
  SignOutIcon,
} from "./style";
import { StyledHeader } from "./style";
import { Logo } from "@components/Logo";

type Props = {
  admin?: boolean;
};
export function StraightHeader({
  admin = false,
}: Props) {
  const navigation = useNavigation();

  function handleGoToChart() {
    navigation.navigate("chart");
  }

  function handleLogout() {
    navigation.navigate("login");
  }
  return (
    <StyledHeader>
      <StyledPizza source={require("../../../assets/pizza.png")} />
      <Logo admin={admin} />
      {admin ? (
        <Button onPress={handleLogout}>
          <SignOutIcon />
        </Button>
      ) : (
        <Button onPress={handleGoToChart}>
          <BackIcon />
        </Button>
      )}
    </StyledHeader>
  );
}
