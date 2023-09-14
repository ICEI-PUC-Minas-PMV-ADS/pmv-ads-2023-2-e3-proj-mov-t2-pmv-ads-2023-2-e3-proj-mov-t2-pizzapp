import { Highlight, StyledSubtitle, StyledTitle } from "./styles";

export function Logo({ admin = false }) {
  return (
    <>
      <StyledTitle admin={admin}>
        Pizz<Highlight>App</Highlight>
      </StyledTitle>
      {admin && <StyledSubtitle>Funcionário</StyledSubtitle>}
    </>
  );
}
