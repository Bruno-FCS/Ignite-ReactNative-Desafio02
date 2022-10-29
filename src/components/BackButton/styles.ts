import styled from "styled-components/native";
import { TouchableOpacity } from "react-native";
import { ArrowLeft } from "phosphor-react-native";

type Props = {
  fitsDiet: string;
};

export const Container = styled(TouchableOpacity)`
  width: 72px;
  position: absolute;
  padding: 50px 0 20px 0;
  z-index: 1;
`;

export const Icon = styled(ArrowLeft).attrs<Props>(({ theme, fitsDiet }) => ({
  size: 24,
  color:
    fitsDiet === "Sim"
      ? theme.COLORS.GREEN_DARK
      : fitsDiet === "Não"
      ? theme.COLORS.RED_DARK
      : theme.COLORS.GRAY_200,
}))<Props>`
  margin-left: 24px;
`;
