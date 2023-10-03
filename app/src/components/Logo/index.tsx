import { Container, Highlight, StyledSubtitle, StyledTitle } from "./styles";

export function Logo({ admin = false }) {
  return (
    <Container>
      <StyledTitle admin={admin}>
        Pizz<Highlight>App</Highlight>
      </StyledTitle>
      {admin && <StyledSubtitle>Funcionário</StyledSubtitle>}
    </Container>
  );
}
