import { useNavigation } from "@react-navigation/native";

import { BackButton } from "@components/BackButton";
import { DataContainer } from "@components/DataContainer";
import { PercentageCardContent } from "@components/PercentageCardContent";
import { StatisticsCard } from "@components/StatisticsCard";

import {
  Container,
  Label,
  PercentageContainer,
  StatisticsCardContainer,
  StatisticsTypeStyleProps,
} from "./styles";

type Props = {
  type?: StatisticsTypeStyleProps;
};

export const Statisctics = ({ type = "PRIMARY" }: Props) => {
  const navigation = useNavigation();

  const handleGoBack = () => {
    navigation.goBack();
  };

  return (
    <Container type={type}>
      <BackButton type="PRIMARY" onPress={handleGoBack} />
      <PercentageContainer>
        <PercentageCardContent
          title="90,86%"
          subtitle="das refeições dentro da dieta"
        />
      </PercentageContainer>
      <DataContainer>
        <Label>Estatísticas gerais</Label>
        <StatisticsCard
          title="22"
          subtitle="melhor sequênica de pratos dentro da dieta"
        ></StatisticsCard>
        <StatisticsCard
          title="109"
          subtitle="refeições registradas"
        ></StatisticsCard>
        <StatisticsCardContainer>
          <StatisticsCard
            title="99"
            subtitle="refeições dentro da dieta"
            type="PRIMARY"
          ></StatisticsCard>
          <StatisticsCard
            title="10"
            subtitle="refeições fora da dieta"
            type="SECONDARY"
          ></StatisticsCard>
        </StatisticsCardContainer>
      </DataContainer>
    </Container>
  );
};
