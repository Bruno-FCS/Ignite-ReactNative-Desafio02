import styled, { css } from "styled-components/native";

export type StatisticsCardTypeStyleProps = "DEFAULT" | "PRIMARY" | "SECONDARY";

type Props = {
  type: StatisticsCardTypeStyleProps;
};

export const Container = styled.View<Props>`
  width: ${({ type }) => (type === "DEFAULT" ? "100%" : "48%")};
  background-color: ${({ theme, type }) => {
    if (type === "PRIMARY") return theme.COLORS.GREEN_LIGHT;
    else if (type === "SECONDARY") return theme.COLORS.RED_LIGHT;
    else return theme.COLORS.GRAY_600;
  }};
  border-radius: 8px;
  justify-content: center;
  align-items: center;
  padding: 16px;
  margin-bottom: 12px;
`;

export const Title = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.XL}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
    color: ${theme.COLORS.GRAY_100};
  `};
  margin-bottom: 8px;
`;

export const Subtitle = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.SM}px;
    font-family: ${theme.FONT_FAMILY.REGULAR};
    color: ${theme.COLORS.GRAY_200};
  `};
  width: 100%;
  text-align: center;
`;
