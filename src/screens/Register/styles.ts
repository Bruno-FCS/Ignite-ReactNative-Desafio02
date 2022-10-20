import styled, { css } from "styled-components/native";

export type FieldContainerTypeStyleProps = "PRIMARY" | "SECONDARY";

type Props = {
  directionAndMargin: FieldContainerTypeStyleProps;
  width: FieldContainerTypeStyleProps;
};

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.COLORS.GRAY_500};
  padding-top: 50px;
`;

export const Form = styled.View`
  height: 100%;
  width: 100%;
`;

export const Title = styled.Text`
  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_100};
    font-size: ${theme.FONT_SIZE.LG}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
  `}
  width: 100%;
  text-align: center;
  padding-bottom: 24px;
`;

export const FieldContainer = styled.View<Props>`
  flex-direction: ${({ directionAndMargin }) =>
    directionAndMargin === "PRIMARY" ? "column" : "row"};
  width: ${({ width }) => (width === "PRIMARY" ? "100%" : "48%")};
  justify-content: space-between;
  margin-bottom: ${({ directionAndMargin }) =>
    directionAndMargin === "PRIMARY" ? "24px" : "0"};
`;
