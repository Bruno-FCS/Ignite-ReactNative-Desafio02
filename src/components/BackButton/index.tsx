import { TouchableOpacityProps } from "react-native";

import { BackButtonTypeStyleProps, Container, Icon } from "./styles";

type Props = TouchableOpacityProps & {
  type?: BackButtonTypeStyleProps;
};

export const BackButton = ({ type = "DEFAULT", ...rest }: Props) => {
  return (
    <Container {...rest}>
      <Icon type={type} />
    </Container>
  );
};
