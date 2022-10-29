import { useCallback, useState } from "react";
import { Alert, Modal, ScrollView } from "react-native";
import {
  useFocusEffect,
  useNavigation,
  useRoute,
} from "@react-navigation/native";

import { BackButton } from "@components/BackButton";
import { Button } from "@components/Button";
import { DataContainer } from "@components/DataContainer";
import { FitsDietIndicator } from "@components/FitsDietIndicator";

import {
  Container,
  Form,
  Title,
  Details,
  DateTimeTitle,
  MealTitle,
  CenteredView,
  ModalView,
  ModalText,
  ButtonsContainer,
  SingleButtonContainter,
} from "./styles";
import { mealGetById } from "@storage/meal/mealGetById";
import { mealDeleteById } from "@storage/meal/mealDeleteById";

type RouteParams = {
  id: string;
};

export const Meal = () => {
  const [mealDetails, setMealDetails] = useState({});
  const [modalVisible, setModalVisible] = useState(false);

  const route = useRoute();
  const { id } = route.params as RouteParams;

  const navigation = useNavigation();

  const handleEditMeal = () => {
    navigation.navigate("register", { type: "EDIT", id });
  };

  const handleDeleteMeal = async () => {
    await mealDeleteById(id);
    navigation.navigate("home");
  };

  const handleGoBack = () => {
    navigation.goBack();
  };

  const fetchMealDetails = async () => {
    try {
      const data = await mealGetById(id);
      setMealDetails(data);
    } catch (error) {
      Alert.alert("Turmas", "Não foi possível carregar as refeições.");
    } finally {
    }
  };

  useFocusEffect(
    useCallback(() => {
      fetchMealDetails();
    }, [])
  );

  return (
    <Container fitsDiet={mealDetails.fitsDiet}>
      <BackButton fitsDiet={mealDetails.fitsDiet} onPress={handleGoBack} />
      <Title>Refeição</Title>
      <DataContainer>
        <Form>
          <ScrollView bounces={false}>
            <MealTitle>{mealDetails.name}</MealTitle>
            <Details>{mealDetails.description}</Details>
            <DateTimeTitle>Data e hora</DateTimeTitle>
            <Details>
              {mealDetails.date} às {mealDetails.time}
            </Details>
            <FitsDietIndicator fitsDiet={mealDetails.fitsDiet} />
          </ScrollView>

          <Button
            icon="EDIT"
            title="Editar refeição"
            onPress={handleEditMeal}
          />
          <Button
            type="SECONDARY"
            icon="DELETE"
            title="Excluir refeição"
            onPress={() => setModalVisible(true)}
          />
        </Form>
      </DataContainer>

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        statusBarTranslucent
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}
      >
        <CenteredView>
          <ModalView>
            <ModalText>
              Deseja realmente excluir o registro de refeição?
            </ModalText>
            <ButtonsContainer>
              <SingleButtonContainter>
                <Button
                  title="Cancelar"
                  type="SECONDARY"
                  onPress={() => setModalVisible(!modalVisible)}
                />
              </SingleButtonContainter>
              <SingleButtonContainter>
                <Button title="Sim, excluir" onPress={handleDeleteMeal} />
              </SingleButtonContainter>
            </ButtonsContainer>
          </ModalView>
        </CenteredView>
      </Modal>
    </Container>
  );
};
