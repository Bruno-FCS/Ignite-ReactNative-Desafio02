import styled from "styled-components/native";
import { TouchableOpacity } from "react-native";
import { ArrowLeft } from "phosphor-react-native";

export type BackButtonTypeStyleProps = "DEFAULT" | "PRIMARY" | "SECONDARY";

type Props = {
  type: BackButtonTypeStyleProps;
};

export const Container = styled(TouchableOpacity)`
  width: 72px;
  position: absolute;
  padding: 50px 0 20px 0;
  z-index: 1;
`;

export const Icon = styled(ArrowLeft).attrs<Props>(({ theme, type }) => ({
  size: 24,
  color:
    type === "DEFAULT"
      ? theme.COLORS.GRAY_200
      : type === "PRIMARY"
      ? theme.COLORS.GREEN_DARK
      : theme.COLORS.RED_DARK,
}))<Props>`
  margin-left: 24px;
`;
