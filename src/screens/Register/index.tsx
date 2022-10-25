import { useState } from "react";
import { FlatList, ScrollView } from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";

import { mealCreate } from "@storage/meal/mealCreate";

import { BackButton } from "@components/BackButton";
import { Button } from "@components/Button";
import { DataContainer } from "@components/DataContainer";
import { DataInput } from "@components/DataInput";
import { DataInputLabel } from "@components/DataInputLabel";
import { SelectionButton } from "@components/SelectionButton";

import { Container, FieldContainer, Form, Title } from "./styles";

type RegisterScreenTypeProps = "NEW" | "EDIT";

type RouteParams = {
  type: RegisterScreenTypeProps;
};

export const Register = () => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [fitsDiet, setFitsDiet] = useState("");

  const route = useRoute();
  const { type } = route.params as RouteParams;

  const navigation = useNavigation();

  const handleRegisterMeal = () => {
    mealCreate({ name, description, date, time, fitsDiet });
    navigation.navigate("feedback", { type: "PRIMARY" });
  };

  const handleGoBack = () => {
    navigation.goBack();
  };

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
