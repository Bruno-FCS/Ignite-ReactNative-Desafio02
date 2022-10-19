import { TouchableOpacityProps } from "react-native";

import {
  AddIcon,
  ButtonIconTypeStyleProps,
  ButtonTypeStyleProps,
  Container,
  DeleteIcon,
  EditIcon,
  Title,
} from "./styles";

type Props = TouchableOpacityProps & {
  title: string;
  type?: ButtonTypeStyleProps;
  icon?: ButtonIconTypeStyleProps;
};

export const Button = ({
  title,
  type = "PRIMARY",
  icon = "DEFAULT",
  ...rest
}: Props) => {
  return (
    <Container type={type} {...rest}>
      <AddIcon icon={icon} />
      <EditIcon icon={icon} />
      <DeleteIcon icon={icon} />
      <Title type={type}>{title}</Title>
    </Container>
  );
};
