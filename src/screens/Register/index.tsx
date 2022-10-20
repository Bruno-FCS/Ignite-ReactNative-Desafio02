import { BackButton } from "@components/BackButton";
import { DataContainer } from "@components/DataContainer";

import { Container, Title } from "./styles";

export const Register = () => {
  return (
    <Container>
      <BackButton />
      <Title>Nova refeição</Title>
      <DataContainer></DataContainer>
    </Container>
  );
};
