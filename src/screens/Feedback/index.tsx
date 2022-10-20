import { Button } from "@components/Button";
import { FeedbackContent } from "@components/FeedbackContent";

import { ButtonContainer, Container } from "./styles";

export const Feedback = () => {
  return (
    <Container>
      <FeedbackContent type="SECONDARY" />

      <ButtonContainer>
        <Button title="Ir para a página inicial" />
      </ButtonContainer>
    </Container>
  );
};
