import { Container, Label } from "./styles";

import { Header } from "@components/Header";
import { PercentageCard } from "@components/PercentageCard";
import { Button } from "@components/Button";

export const Home = () => {
  return (
    <Container>
      <Header />
      <PercentageCard
        type="PRIMARY"
        title="90,86%"
        subtitle="das refeições dentro da dieta"
      />
      <Label>Refeições</Label>
      <Button title="Nova refeição" icon="ADD" />
    </Container>
  );
};
