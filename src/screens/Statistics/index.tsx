import { BackButton } from "@components/BackButton";
import { PercentageCardContent } from "@components/PercentageCardContent";

import {
  Container,
  PercentageContainer,
  StatisticsTypeStyleProps,
} from "./styles";

type Props = {
  type?: StatisticsTypeStyleProps;
};

export const Statisctics = ({ type = "PRIMARY" }: Props) => {
  return (
    <Container type={type}>
      <PercentageContainer>
        <BackButton />
        <PercentageCardContent
          title="90,86%"
          subtitle="das refeições dentro da dieta"
        />
      </PercentageContainer>
    </Container>
  );
};
