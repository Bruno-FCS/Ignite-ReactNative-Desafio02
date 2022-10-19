import styled, { css } from "styled-components/native";
import { ArrowLeft } from "phosphor-react-native";
import { TouchableOpacity } from "react-native";

export type BackButtonTypeStyleProps = "PRIMARY" | "SECONDARY";

type Props = {
  type: BackButtonTypeStyleProps;
};

export const Container = styled(TouchableOpacity)`
  width: 100%;
`;

export const Icon = styled(ArrowLeft).attrs<Props>(({ theme, type }) => ({
  size: 24,
  color: type === "PRIMARY" ? theme.COLORS.GREEN_DARK : theme.COLORS.RED_DARK,
}))<Props>`
  margin-left: 24px;
`;
