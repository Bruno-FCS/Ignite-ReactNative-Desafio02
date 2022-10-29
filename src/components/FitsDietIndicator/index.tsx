import { Container, Title, Icon } from "./styles";

type Props = {
  fitsDiet: string;
};

export const FitsDietIndicator = ({ fitsDiet }: Props) => {
  return (
    <Container fitsDiet={fitsDiet}>
      <Icon fitsDiet={fitsDiet} />
      <Title>{fitsDiet === "Sim" ? "dentro da dieta" : "fora da dieta"}</Title>
    </Container>
  );
};
