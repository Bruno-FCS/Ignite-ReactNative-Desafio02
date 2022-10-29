import { TouchableOpacityProps } from "react-native";

import { Container, Icon } from "./styles";

type Props = TouchableOpacityProps & {
  fitsDiet?: string;
};

export const BackButton = ({ fitsDiet = "", ...rest }: Props) => {
  return (
    <Container {...rest}>
      <Icon fitsDiet={fitsDiet} />
    </Container>
  );
};
