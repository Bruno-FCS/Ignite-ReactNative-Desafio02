import styled from "styled-components/native";
import { TouchableOpacity } from "react-native";
import { ArrowUpRight } from "phosphor-react-native";

export type PercentageCardTypeStyleProps = "PRIMARY" | "SECONDARY";

type Props = {
  type: PercentageCardTypeStyleProps;
};

export const Container = styled(TouchableOpacity)<Props>`
  width: 100%;
  background-color: ${({ theme, type }) =>
    type === "PRIMARY" ? theme.COLORS.GREEN_LIGHT : theme.COLORS.RED_LIGHT};
  border-radius: 8px;
  justify-content: center;
  align-items: center;
  padding: 20px 0 20px 0;
  margin-bottom: 40px;
`;

export const Icon = styled(ArrowUpRight).attrs<Props>(({ theme, type }) => ({
  size: 24,
  color: type === "PRIMARY" ? theme.COLORS.GREEN_DARK : theme.COLORS.RED_DARK,
}))<Props>`
  position: absolute;
  right: 8px;
  top: 8px;
`;
