import { ScrollView } from "react-native";
import { useNavigation } from "@react-navigation/native";

import { BackButton } from "@components/BackButton";
import { Button } from "@components/Button";
import { DataContainer } from "@components/DataContainer";
import { DataInput } from "@components/DataInput";
import { DataInputLabel } from "@components/DataInputLabel";
import { SelectionButton } from "@components/SelectionButton";

import { Container, FieldContainer, Form, Title } from "./styles";

type RegisterScreenTypeProps = "NEW" | "EDIT";

type Props = {
  type: RegisterScreenTypeProps;
};

export const Register = ({ type }: Props) => {
  const navigation = useNavigation();

  const handleShowFeedback = () => {
    navigation.navigate("feedback", { type: "PRIMARY" });
  };

  return (
    <Container>
      <BackButton />
      <Title>{type === "NEW" ? "Nova refeição" : "Editar refeição"}</Title>
      <DataContainer>
        <Form>
          <ScrollView bounces={false}>
            <FieldContainer directionAndMargin="PRIMARY" width="PRIMARY">
              <DataInputLabel title="Nome" />
              <DataInput />
            </FieldContainer>

            <FieldContainer directionAndMargin="PRIMARY" width="PRIMARY">
              <DataInputLabel title="Descrição" />
              <DataInput textAlignVertical="top" multiline type="SECONDARY" />
            </FieldContainer>

            <FieldContainer directionAndMargin="SECONDARY" width="PRIMARY">
              <FieldContainer directionAndMargin="PRIMARY" width="SECONDARY">
                <DataInputLabel title="Data" />
                <DataInput />
              </FieldContainer>

              <FieldContainer directionAndMargin="PRIMARY" width="SECONDARY">
                <DataInputLabel title="Hora" />
                <DataInput />
              </FieldContainer>
            </FieldContainer>

            <FieldContainer directionAndMargin="PRIMARY" width="PRIMARY">
              <DataInputLabel title="Está dentro da dieta?" />

              <FieldContainer directionAndMargin="SECONDARY" width="PRIMARY">
                <SelectionButton title="Sim" type="PRIMARY" />
                <SelectionButton title="Não" type="SECONDARY" />
              </FieldContainer>
            </FieldContainer>
          </ScrollView>

          <Button
            title={type === "NEW" ? "Cadastrar refeição" : "Salvar alterações"}
            onPress={handleShowFeedback}
          />
        </Form>
      </DataContainer>
    </Container>
  );
};
