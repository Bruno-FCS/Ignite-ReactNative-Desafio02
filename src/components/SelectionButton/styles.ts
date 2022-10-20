import styled, { css } from "styled-components/native";
import { TouchableOpacity } from "react-native";

export type SelectionButtonTypeStyleProps = "PRIMARY" | "SECONDARY";
export type SelectionButtonActiveStyleProps = boolean;

type Props = {
  type: SelectionButtonTypeStyleProps;
  isActive?: SelectionButtonActiveStyleProps;
};

export const Container = styled(TouchableOpacity)<Props>`
  ${({ theme, type, isActive }) =>
    isActive && type === "PRIMARY"
      ? css`
          border: 1px solid ${theme.COLORS.GREEN_DARK};
          background-color: ${theme.COLORS.GREEN_LIGHT};
        `
      : isActive && type === "SECONDARY"
      ? css`
          border: 1px solid ${theme.COLORS.RED_DARK};
          background-color: ${theme.COLORS.RED_LIGHT};
        `
      : css`
          background-color: ${theme.COLORS.GRAY_600};
        `};

  width: 48%;
  flex-direction: row;
  min-height: 50px;
  max-height: 50px;
  border-radius: 6px;
  align-items: center;
  justify-content: center;
`;

export const Title = styled.Text`
  ${({ theme }) =>
    css`
      font-family: ${theme.FONT_FAMILY.BOLD};
      font-size: ${theme.FONT_SIZE.SM}px;
      color: ${theme.COLORS.GRAY_100};
    `};

  padding-left: 8px;
`;

export const Icon = styled.View<Props>`
  background-color: ${({ theme, type }) =>
    type === "PRIMARY" ? theme.COLORS.GREEN_DARK : theme.COLORS.RED_DARK};
  width: 8px;
  height: 8px;
  border-radius: 4px;
`;
