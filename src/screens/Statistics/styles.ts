import styled, { css } from "styled-components/native";

export type StatisticsTypeStyleProps = "PRIMARY" | "SECONDARY";

type Props = {
  type: StatisticsTypeStyleProps;
};

export const Container = styled.View<Props>`
  flex: 1;
  background-color: ${({ theme, type }) =>
    type === "PRIMARY" ? theme.COLORS.GREEN_LIGHT : theme.COLORS.RED_LIGHT};
  padding-top: 50px;
`;

export const PercentageContainer = styled.View`
  width: 100%;
  align-items: center;
  padding-bottom: 34px;
`;

export const StatisticsCardContainer = styled.View`
  width: 100%;
  justify-content: space-between;
  flex-direction: row;
`;

export const Label = styled.Text`
  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_100};
    font-size: ${theme.FONT_SIZE.SM}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
  `}
  margin-bottom: 24px;
`;
