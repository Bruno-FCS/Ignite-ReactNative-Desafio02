import styled, { css } from "styled-components/native";
import { TouchableOpacity } from "react-native";
import { Plus } from "phosphor-react-native";
import { PencilSimpleLine } from "phosphor-react-native";
import { Trash } from "phosphor-react-native";

export type ButtonTypeStyleProps = "PRIMARY" | "SECONDARY";
export type ButtonIconTypeStyleProps = "DEFAULT" | "ADD" | "EDIT" | "DELETE";

type Props = {
  type: ButtonTypeStyleProps;
};

type IconProps = {
  icon: ButtonIconTypeStyleProps;
};

export const Container = styled(TouchableOpacity)<Props>`
  ${({ theme, type }) => css`
    background-color: ${type === "PRIMARY"
      ? theme.COLORS.GRAY_200
      : theme.COLORS.GRAY_700};
    border-width: ${type === "PRIMARY" ? 0 : 1}px;
    border-color: ${theme.COLORS.GRAY_100};
  `}

  flex-direction: row;
  width: 100%;
  border-radius: 6px;
  justify-content: center;
  align-items: center;
  padding: 16px 24px 16px 24px;
  margin-bottom: 8px;
`;

export const AddIcon = styled(Plus).attrs<IconProps>(({ theme }) => ({
  size: 18,
  color: theme.COLORS.WHITE,
}))<IconProps>`
  display: ${({ icon }) => (icon === "ADD" ? "flex" : "none")};
  margin-right: 12px;
`;

export const EditIcon = styled(PencilSimpleLine).attrs<IconProps>(
  ({ theme }) => ({
    size: 18,
    color: theme.COLORS.WHITE,
  })
)<IconProps>`
  display: ${({ icon }) => (icon === "EDIT" ? "flex" : "none")};
  margin-right: 12px;
`;

export const DeleteIcon = styled(Trash).attrs<IconProps>(({ theme }) => ({
  size: 18,
  color: theme.COLORS.GRAY_100,
}))<IconProps>`
  display: ${({ icon }) => (icon === "DELETE" ? "flex" : "none")};
  margin-right: 12px;
`;

export const Title = styled.Text<Props>`
  ${({ theme, type }) => css`
    color: ${type === "PRIMARY" ? theme.COLORS.WHITE : theme.COLORS.GRAY_100};
    font-size: ${theme.FONT_SIZE.SM}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
  `}
`;
