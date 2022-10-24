import { SectionList } from "react-native";
import { useNavigation } from "@react-navigation/native";

import { Container, ButtonLabel, MealsLabel, Gradient } from "./styles";

import { Header } from "@components/Header";
import { PercentageCard } from "@components/PercentageCard";
import { Button } from "@components/Button";
import { MealCard } from "@components/MealCard";

const DATA = [
  {
    label: "12.08.22",
    data: [
      { hour: "20:00", title: "X-tudo", type: "SECONDARY" },
      { hour: "16:00", title: "Whey protein com leite" },
      { hour: "12:30", title: "Salada cesar com frango..." },
      { hour: "09:30", title: "Vitamina de banana com..." },
    ],
  },
  {
    label: "11.08.22",
    data: [
      { hour: "20:00", title: "X-tudo", type: "SECONDARY" },
      { hour: "16:00", title: "Whey protein com leite" },
      { hour: "12:30", title: "Salada cesar com frango..." },
      { hour: "09:30", title: "Vitamina de banana com..." },
    ],
  },
];

export const Home = () => {
  const navigation = useNavigation();

  const handleNewMeal = () => {
    navigation.navigate("register", { type: "NEW" });
  };

  const handleMealDetails = () => {
    navigation.navigate("meal", {
      name: "Sanduíche",
      description:
        "Sanduíche de pão integral com atum e salada de alface e tomate",
      date: "12/08/2022",
      time: "16:00",
      fitsDiet: true,
    });
  };

  const handleShowStatistics = () => {
    navigation.navigate("statistics");
  };

  return (
    <Container>
      <Header />
      <PercentageCard
        type="PRIMARY"
        title="90,86%"
        subtitle="das refeições dentro da dieta"
        onPress={handleShowStatistics}
      />
      <ButtonLabel>Refeições</ButtonLabel>
      <Button title="Nova refeição" icon="ADD" onPress={handleNewMeal} />
      <SectionList
        sections={DATA}
        keyExtractor={(item, index) => item + index.toString()}
        renderItem={({ item }) => (
          <MealCard
            hour={item.hour}
            title={item.title}
            type={item.type}
            onPress={handleMealDetails}
          />
        )}
        renderSectionHeader={({ section: { label } }) => (
          <MealsLabel>{label}</MealsLabel>
        )}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={[{ paddingBottom: 100 }]}
        stickySectionHeadersEnabled={false}
        overScrollMode="never"
      />
      <Gradient />
    </Container>
  );
};
