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
`;
