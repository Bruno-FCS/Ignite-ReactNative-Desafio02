import { TouchableOpacityProps } from "react-native";

import {
  Container,
  Title,
  Subtitle,
  Icon,
  PercentageCardTypeStyleProps,
} from "./styles";

type Props = TouchableOpacityProps & {
  title: string;
  subtitle: string;
  type?: PercentageCardTypeStyleProps;
};

export const PercentageCard = ({
  title,
  subtitle,
  type = "PRIMARY",
  ...rest
}: Props) => {
  return (
    <Container type={type} {...rest}>
      <Title>{title}</Title>
      <Subtitle>{subtitle}</Subtitle>
      <Icon type={type} />
    </Container>
  );
};
