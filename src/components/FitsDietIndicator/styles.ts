import styled, { css } from "styled-components/native";

type Props = {
  fitsDiet: string;
};

export const Container = styled.View<Props>`
  flex-direction: row;
  width: ${({ fitsDiet }) => (fitsDiet === "Sim" ? "144px" : "127px")};
  background-color: ${({ theme }) => theme.COLORS.GRAY_600};
  min-height: 34px;
  max-height: 34px;
  border-radius: 17px;
  align-items: center;
  justify-content: center;
  padding: 8px 16px 8px 16px;
`;

export const Title = styled.Text`
  ${({ theme }) =>
    css`
      font-family: ${theme.FONT_FAMILY.REGULAR};
      font-size: ${theme.FONT_SIZE.SM}px;
      color: ${theme.COLORS.GRAY_100};
    `};

  padding-left: 8px;
`;

export const Icon = styled.View<Props>`
  background-color: ${({ theme, fitsDiet }) =>
    fitsDiet === "Sim" ? theme.COLORS.GREEN_DARK : theme.COLORS.RED_DARK};
  width: 8px;
  height: 8px;
  border-radius: 4px;
`;
