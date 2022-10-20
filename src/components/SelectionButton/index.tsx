import { TouchableOpacityProps } from "react-native";

import {
  Container,
  Title,
  SelectionButtonActiveStyleProps,
  SelectionButtonTypeStyleProps,
  Icon,
} from "./styles";

type Props = TouchableOpacityProps & {
  title: string;
  type?: SelectionButtonTypeStyleProps;
  isActive?: SelectionButtonActiveStyleProps;
};

export const SelectionButton = ({
  title,
  type = "PRIMARY",
  isActive = false,
  ...rest
}: Props) => {
  return (
    <Container type={type} isActive={isActive} {...rest}>
      <Icon type={type} />
      <Title>{title}</Title>
    </Container>
  );
};
