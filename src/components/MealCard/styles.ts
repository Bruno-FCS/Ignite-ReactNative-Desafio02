import styled, { css } from "styled-components/native";
import { TouchableOpacity } from "react-native";

export type MealCardTypeStyleProps = "PRIMARY" | "SECONDARY";

type Props = {
  type: MealCardTypeStyleProps | string;
};

export const Container = styled(TouchableOpacity)`
  ${({ theme }) => css`
    background-color: ${theme.COLORS.GRAY_700};
    border-color: ${theme.COLORS.GRAY_500};
  `}

  flex-direction: row;
  width: 100%;
  border-radius: 6px;
  border-width: 1px;
  padding: 14px 16px 14px 12px;
  align-items: center;
  margin-bottom: 8px;
`;

export const Hour = styled.Text`
  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_100};
    font-size: ${theme.FONT_SIZE.XS}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
  `}

  margin-right: 12px;
`;

export const Title = styled.Text`
  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_200};
    font-size: ${theme.FONT_SIZE.MD}px;
    font-family: ${theme.FONT_FAMILY.REGULAR};
    border-color: ${theme.COLORS.GRAY_500};
  `}

  border-left-width: 1px;
  flex: 1;
  padding-left: 12px;
  margin-right: 12px;
`;

export const Icon = styled.View<Props>`
  background-color: ${({ theme, type }) =>
    type === "PRIMARY" ? theme.COLORS.GREEN_MID : theme.COLORS.RED_MID};
  width: 14px;
  height: 14px;
  border-radius: 7px;
`;
