import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.COLORS.GRAY_700};
  padding: 50px 24px 0 24px;
  justify-content: center;
  align-items: center;
`;

export const ButtonContainer = styled.View`
  width: 55%;
`;
