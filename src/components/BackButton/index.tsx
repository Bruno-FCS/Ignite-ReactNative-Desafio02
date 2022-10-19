import { TouchableOpacityProps } from "react-native";

import { BackButtonTypeStyleProps, Container, Icon } from "./styles";

type Props = TouchableOpacityProps & {
  type?: BackButtonTypeStyleProps;
};

export const BackButton = ({ type = "PRIMARY", ...rest }: Props) => {
  return (
    <Container {...rest}>
      <Icon type={type} />
    </Container>
  );
};
