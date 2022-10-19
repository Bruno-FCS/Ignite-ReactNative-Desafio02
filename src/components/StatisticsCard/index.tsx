import {
  Container,
  StatisticsCardTypeStyleProps,
  Title,
  Subtitle,
} from "./styles";

type Props = {
  title: string;
  subtitle: string;
  type?: StatisticsCardTypeStyleProps;
};

export const StatisticsCard = ({
  title,
  subtitle,
  type = "DEFAULT",
}: Props) => {
  return (
    <Container type={type}>
      <Title>{title}</Title>
      <Subtitle>{subtitle}</Subtitle>
    </Container>
  );
};
