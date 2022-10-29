import { useCallback, useState } from "react";
import { Alert, SectionList, Text } from "react-native";
import { useFocusEffect, useNavigation } from "@react-navigation/native";

import { mealsGetAll } from "@storage/meal/mealsGetAll";

import { Header } from "@components/Header";
import { PercentageCard } from "@components/PercentageCard";
import { Button } from "@components/Button";
import { MealCard } from "@components/MealCard";

import { Container, ButtonLabel, MealsLabel, Gradient } from "./styles";

export interface DataProps {
  label: string;
  data: [];
}

export const Home = () => {
  const [meals, setMeals] = useState<DataProps[]>([]);

  const navigation = useNavigation();

  const handleNewMeal = async () => {
    navigation.navigate("register", { type: "NEW" });
  };

  const handleMealDetails = (id) => {
    navigation.navigate("meal", { id });
  };

  const handleShowStatistics = () => {
    navigation.navigate("statistics");
  };

  const fetchMeals = async () => {
    try {
      const data = await mealsGetAll();
      setMeals(data);
    } catch (error) {
      Alert.alert("Turmas", "Não foi possível carregar as refeições.");
    } finally {
    }
  };

  useFocusEffect(
    useCallback(() => {
      fetchMeals();
    }, [])
  );

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
        sections={meals}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <MealCard
            hour={item.time}
            title={item.name}
            fitsDiet={item.fitsDiet}
            onPress={() => handleMealDetails(item.id)}
          />
        )}
        renderSectionHeader={({ section: { label } }) => (
          <MealsLabel>{label}</MealsLabel>
        )}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={[{ paddingBottom: 100 }]}
        stickySectionHeadersEnabled={false}
        overScrollMode="never"
        ListEmptyComponent={<Text>Lista vazia</Text>}
      />
      <Gradient />
    </Container>
  );
};
