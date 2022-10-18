import styled from "styled-components/native";

export const Container = styled.SafeAreaView`
  flex: 1;
  background-color: ${({ theme }) => theme.COLORS.GRAY_700};
  padding-left: 24px;
  padding-right: 24px;
  padding-top: 50px;
`;
