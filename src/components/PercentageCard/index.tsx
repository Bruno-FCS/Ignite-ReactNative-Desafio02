import { PercentageCardContent } from "@components/PercentageCardContent";
import { TouchableOpacityProps } from "react-native";

import { Container, Icon, PercentageCardTypeStyleProps } from "./styles";

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
      <PercentageCardContent title={title} subtitle={subtitle} />
      <Icon type={type} />
    </Container>
  );
};
