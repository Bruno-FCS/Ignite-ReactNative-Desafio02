import { useCallback, useState } from "react";
import { Alert, FlatList, ScrollView } from "react-native";
import {
  useFocusEffect,
  useNavigation,
  useRoute,
} from "@react-navigation/native";

import { mealCreate } from "@storage/meal/mealCreate";

import { BackButton } from "@components/BackButton";
import { Button } from "@components/Button";
import { DataContainer } from "@components/DataContainer";
import { DataInput } from "@components/DataInput";
import { DataInputLabel } from "@components/DataInputLabel";
import { SelectionButton } from "@components/SelectionButton";

import { Container, FieldContainer, Form, Title } from "./styles";
import { mealsGetAll } from "@storage/meal/mealsGetAll";
import { mealGetById } from "@storage/meal/mealGetById";
import { mealUpdateById } from "@storage/meal/mealUpdateById";

type RegisterScreenTypeProps = "NEW" | "EDIT";

type RouteParams = {
  type: RegisterScreenTypeProps;
  id?: number;
};

export const Register = () => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [fitsDiet, setFitsDiet] = useState("");

  const route = useRoute();
  const { type, id } = route.params as RouteParams;

  const navigation = useNavigation();

  const handleRegisterMeal = async () => {
    if (
      name.trim().length === 0 ||
      description.trim().length === 0 ||
      date.trim().length === 0 ||
      time.trim().length === 0 ||
      fitsDiet.trim().length === 0
    ) {
      return;
    }

    if (type === "EDIT") {
      await mealUpdateById(name, description, date, time, fitsDiet, id);
    } else {
      await mealCreate(name, description, date, time, fitsDiet);
    }

    console.warn(await mealsGetAll());
    navigation.navigate("feedback", {
      type: fitsDiet === "Sim" ? "PRIMARY" : "SECONDARY",
    });
  };

  const handleGoBack = () => {
    navigation.goBack();
  };

  const fetchMealDetails = async () => {
    try {
      const { name, description, date, time, fitsDiet } = await mealGetById(id);
      setName(name);
      setDescription(description);
      setDate(date);
      setTime(time);
      setFitsDiet(fitsDiet);
    } catch (error) {
      Alert.alert(
        "Editar refeição",
        "Não foi possível carregar as informações."
      );
    } finally {
    }
  };

  useFocusEffect(
    useCallback(() => {
      if (type === "EDIT") {
        fetchMealDetails();
      }
    }, [])
  );

  return (
    <Container>
      <BackButton onPress={handleGoBack} />
      <Title>{type === "NEW" ? "Nova refeição" : "Editar refeição"}</Title>
      <DataContainer>
        <Form>
          <ScrollView bounces={false}>
            <FieldContainer directionAndMargin="PRIMARY" width="PRIMARY">
              <DataInputLabel title="Nome" />
              <DataInput onChangeText={setName} value={name} />
            </FieldContainer>

            <FieldContainer directionAndMargin="PRIMARY" width="PRIMARY">
              <DataInputLabel title="Descrição" />
              <DataInput
                textAlignVertical="top"
                multiline
                type="SECONDARY"
                onChangeText={setDescription}
                value={description}
              />
            </FieldContainer>

            <FieldContainer directionAndMargin="SECONDARY" width="PRIMARY">
              <FieldContainer directionAndMargin="PRIMARY" width="SECONDARY">
                <DataInputLabel title="Data" />
                <DataInput onChangeText={setDate} value={date} />
              </FieldContainer>

              <FieldContainer directionAndMargin="PRIMARY" width="SECONDARY">
                <DataInputLabel title="Hora" />
                <DataInput onChangeText={setTime} value={time} />
              </FieldContainer>
            </FieldContainer>

            <FieldContainer directionAndMargin="PRIMARY" width="PRIMARY">
              <DataInputLabel title="Está dentro da dieta?" />
            </FieldContainer>

            <FlatList
              data={["Sim", "Não"]}
              keyExtractor={(item) => item}
              renderItem={({ item }) => (
                <SelectionButton
                  title={item}
                  isActive={item === fitsDiet}
                  type={item === "Sim" ? "PRIMARY" : "SECONDARY"}
                  onPress={() => setFitsDiet(item)}
                />
              )}
              horizontal
            />
          </ScrollView>

          <Button
            title={type === "NEW" ? "Cadastrar refeição" : "Salvar alterações"}
            onPress={handleRegisterMeal}
          />
        </Form>
      </DataContainer>
    </Container>
  );
};
