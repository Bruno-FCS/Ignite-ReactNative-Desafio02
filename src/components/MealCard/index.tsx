import { TouchableOpacityProps } from "react-native";

import { Container, Hour, Icon, MealCardTypeStyleProps, Title } from "./styles";

type Props = TouchableOpacityProps & {
  hour: string;
  title: string;
  fitsDiet: string;
};

export const MealCard = ({ hour, title, fitsDiet, ...rest }: Props) => {
  return (
    <Container {...rest}>
      <Hour>{hour}</Hour>
      <Title>{title}</Title>
      <Icon type={fitsDiet === "Sim" ? "PRIMARY" : "SECONDARY"} />
    </Container>
  );
};
