import { Container } from "./styles";

import { Header } from "@components/Header";
import { PercentageCard } from "@components/PercentageCard";

export const Home = () => {
  return (
    <Container>
      <Header />
      <PercentageCard title="90,86%" subtitle="das refeições dentro da dieta" />
    </Container>
  );
};
