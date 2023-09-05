import styled from "styled-components/native";

export const Container = styled.View`
  margin-top: 120;
  gap: 25;
`;
export const Page = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.COLORS.YELLOW_500};
`;
