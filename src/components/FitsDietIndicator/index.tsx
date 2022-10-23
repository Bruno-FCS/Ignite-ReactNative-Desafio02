import {
  Container,
  Title,
  Icon,
  FitsDietIndicatorTypeStyleProps,
} from "./styles";

type Props = {
  type?: FitsDietIndicatorTypeStyleProps;
};

export const FitsDietIndicator = ({ type = true }: Props) => {
  return (
    <Container type={type}>
      <Icon type={type} />
      <Title>{type ? "dentro da dieta" : "fora da dieta"}</Title>
    </Container>
  );
};
