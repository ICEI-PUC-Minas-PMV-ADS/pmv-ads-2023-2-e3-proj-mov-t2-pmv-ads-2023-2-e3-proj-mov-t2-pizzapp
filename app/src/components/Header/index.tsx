
import { Highlight, StyledLogo, StyledTitle } from "./style";
import { StyledHeader } from "./style";

export function Header() {
  return (
    <StyledHeader>
      <StyledLogo source={require("../../../assets/pizza.png")} />
      <StyledTitle>
        Pizz<Highlight>App</Highlight>
      </StyledTitle>
    </StyledHeader>
  );
}
