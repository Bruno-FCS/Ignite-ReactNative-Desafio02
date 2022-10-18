import { TouchableOpacityProps } from "react-native";

import { Container, Title, Subtitle, Icon } from "./styles";

type Props = TouchableOpacityProps & {
  title: string;
  subtitle: string;
};

export const PercentageCard = ({ title, subtitle, ...rest }: Props) => {
  return (
    <Container {...rest}>
      <Title>{title}</Title>
      <Subtitle>{subtitle}</Subtitle>
      <Icon />
    </Container>
  );
};
