import styled, { css } from "styled-components/native";

export const Title = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE["2XL"]}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
    color: ${theme.COLORS.GRAY_100};
  `};
`;

export const Subtitle = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.SM}px;
    font-family: ${theme.FONT_FAMILY.REGULAR};
    color: ${theme.COLORS.GRAY_200};
  `};
`;
