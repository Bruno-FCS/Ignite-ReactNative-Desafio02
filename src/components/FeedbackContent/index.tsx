import {
  Title,
  Subtitle,
  Image,
  FeedbackContentTypeStyleProps,
} from "./styles";

import positiveFeedBackImg from "@assets/positive-feedback.png";
import negativeFeedBackImg from "@assets/negative-feedback.png";
import { Text } from "react-native";

type Props = {
  type?: FeedbackContentTypeStyleProps;
};

export const FeedbackContent = ({ type = "PRIMARY" }: Props) => {
  return (
    <>
      <Title type={type}>
        {type === "PRIMARY" ? "Continue assim!" : "Que pena!"}
      </Title>
      <Text style={{ textAlign: "center", marginBottom: 40 }}>
        <Subtitle>{type === "PRIMARY" ? "Você continua " : "Você "}</Subtitle>
        <Subtitle bold>
          {type === "PRIMARY" ? "dentro da dieta" : "saiu da dieta "}
        </Subtitle>
        <Subtitle>
          {type === "PRIMARY"
            ? ". Muito bem!"
            : "dessa vez, mas continue se esforçando e não desista!"}
        </Subtitle>
      </Text>
      <Image
        source={type === "PRIMARY" ? positiveFeedBackImg : negativeFeedBackImg}
      />
    </>
  );
};
