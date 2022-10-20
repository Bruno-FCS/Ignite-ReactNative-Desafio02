import styled, { css } from "styled-components/native";

export type StatisticsCardTypeStyleProps = "DEFAULT" | "PRIMARY" | "SECONDARY";

type Props = {
  type: StatisticsCardTypeStyleProps;
};

export const Container = styled.View<Props>`
  ${({ theme, type }) =>
    type === "PRIMARY"
      ? css`
          width: 48%;
          background-color: ${theme.COLORS.GREEN_LIGHT};
        `
      : type === "SECONDARY"
      ? css`
          width: 48%;
          background-color: ${theme.COLORS.RED_LIGHT};
        `
      : css`
          width: 100%;
          background-color: ${theme.COLORS.GRAY_600};
        `};

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
