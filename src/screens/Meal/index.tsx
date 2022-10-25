import { useState } from "react";
import { Modal, ScrollView } from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";

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

type RouteParams = {
  name: string;
  description: string;
  date: string;
  time: string;
  fitsDiet: boolean;
};

export const Meal = () => {
  const [modalVisible, setModalVisible] = useState(false);

  const route = useRoute();
  const { name, description, date, time, fitsDiet } =
    route.params as RouteParams;

  const navigation = useNavigation();

  const handleEditMeal = () => {
    navigation.navigate("register", { type: "EDIT" });
  };

  const handleGoBack = () => {
    navigation.goBack();
  };

  return (
    <Container fitsDiet={fitsDiet}>
      <BackButton type="PRIMARY" onPress={handleGoBack} />
      <Title>Refeição</Title>
      <DataContainer>
        <Form>
          <ScrollView bounces={false}>
            <MealTitle>{name}</MealTitle>
            <Details>{description}</Details>
            <DateTimeTitle>Data e hora</DateTimeTitle>
            <Details>
              {date} às {time}
            </Details>
            <FitsDietIndicator type />
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
                <Button
                  title="Sim, excluir"
                  onPress={() => setModalVisible(!modalVisible)}
                />
              </SingleButtonContainter>
            </ButtonsContainer>
          </ModalView>
        </CenteredView>
      </Modal>
    </Container>
  );
};
