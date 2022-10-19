import { TouchableOpacityProps } from "react-native";

import { Container, Hour, Icon, MealCardTypeStyleProps, Title } from "./styles";

type Props = TouchableOpacityProps & {
  hour: string;
  title: string;
  type?: MealCardTypeStyleProps | string;
};

export const MealCard = ({ hour, title, type = "PRIMARY", ...rest }: Props) => {
  return (
    <Container {...rest}>
      <Hour>{hour}</Hour>
      <Title>{title}</Title>
      <Icon type={type} />
    </Container>
  );
};
