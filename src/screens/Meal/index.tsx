import { useState } from "react";
import { Modal } from "react-native";

import { BackButton } from "@components/BackButton";
import { Button } from "@components/Button";
import { DataContainer } from "@components/DataContainer";
import { FitsDietIndicator } from "@components/FitsDietIndicator";
import { ScrollView } from "react-native";

import {
  Container,
  Form,
  MealTypeStyleProps,
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

type Props = {
  name: string;
  description: string;
  date: string;
  time: string;
  fitsDiet: boolean;
  type?: MealTypeStyleProps;
};

export const Meal = ({
  name,
  description,
  date,
  time,
  fitsDiet,
  type = "PRIMARY",
}: Props) => {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <Container type={type}>
      <BackButton />
      <Title>Refeição</Title>
      <DataContainer>
        <Form>
          <ScrollView bounces={false}>
            <MealTitle>Sanduíche</MealTitle>
            <Details>
              Sanduíche de pão integral com atum e salada de alface e tomate
            </Details>
            <DateTimeTitle>Date e hora</DateTimeTitle>
            <Details>12/08/2022 às 16:00</Details>
            <FitsDietIndicator type />
          </ScrollView>

          <Button icon="EDIT" title="Editar refeição" />
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
