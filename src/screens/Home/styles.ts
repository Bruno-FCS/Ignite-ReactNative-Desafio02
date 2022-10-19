import styled, { css } from "styled-components/native";

export const Container = styled.SafeAreaView`
  flex: 1;
  background-color: ${({ theme }) => theme.COLORS.GRAY_700};
  padding-left: 24px;
  padding-right: 24px;
  padding-top: 50px;
`;

export const Label = styled.Text`
  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_100};
    font-size: ${theme.FONT_SIZE.MD}px;
    font-family: ${theme.FONT_FAMILY.REGULAR};
  `}
  margin-bottom: 8px;
`;
