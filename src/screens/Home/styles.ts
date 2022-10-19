import styled, { css } from "styled-components/native";
import { LinearGradient } from "expo-linear-gradient";

export const Container = styled.SafeAreaView`
  flex: 1;
  background-color: ${({ theme }) => theme.COLORS.GRAY_700};
  padding-left: 24px;
  padding-right: 24px;
  padding-top: 50px;
`;

export const ButtonLabel = styled.Text`
  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_100};
    font-size: ${theme.FONT_SIZE.MD}px;
    font-family: ${theme.FONT_FAMILY.REGULAR};
  `}
  margin-bottom: 8px;
`;

export const MealsLabel = styled.Text`
  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_100};
    font-size: ${theme.FONT_SIZE.LG}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
  `}
  margin: 24px 0 8px 0;
`;

export const Gradient = styled(LinearGradient).attrs(({ theme }) => ({
  colors: [theme.COLORS.GRAY_700, "transparent"],
  start: { x: 0, y: 1 },
  end: { x: 0, y: 0 },
}))`
  position: absolute;
  height: 100px;
  width: 100%;
  bottom: 0;
  left: 24px;
`;
