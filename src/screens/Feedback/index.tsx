import { useNavigation } from "@react-navigation/native";

import { Button } from "@components/Button";
import { FeedbackContent } from "@components/FeedbackContent";
import { FeedbackContentTypeStyleProps } from "@components/FeedbackContent/styles";

import { ButtonContainer, Container } from "./styles";

type Props = {
  type?: FeedbackContentTypeStyleProps;
};

export const Feedback = ({ type = "PRIMARY" }: Props) => {
  const navigation = useNavigation();

  const handleBackToHome = () => {
    navigation.navigate("home");
  };

  return (
    <Container>
      <FeedbackContent type={type} />

      <ButtonContainer>
        <Button title="Ir para a página inicial" onPress={handleBackToHome} />
      </ButtonContainer>
    </Container>
  );
};
