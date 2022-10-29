import styled, { css } from "styled-components/native";

type Props = {
  fitsDiet: string;
};

export const Container = styled.View<Props>`
  flex: 1;
  background-color: ${({ theme, fitsDiet }) =>
    fitsDiet === "Sim" ? theme.COLORS.GREEN_LIGHT : theme.COLORS.RED_LIGHT};
  padding-top: 50px;
`;

export const Form = styled.View`
  height: 100%;
  width: 100%;
`;

export const Title = styled.Text`
  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_100};
    font-size: ${theme.FONT_SIZE.LG}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
  `}
  width: 100%;
  text-align: center;
  padding-bottom: 24px;
`;

export const MealTitle = styled.Text`
  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_100};
    font-size: ${theme.FONT_SIZE.LG}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
  `}
  width: 100%;
  margin-bottom: 8px;
`;

export const Details = styled.Text`
  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_200};
    font-size: ${theme.FONT_SIZE.MD}px;
    font-family: ${theme.FONT_FAMILY.REGULAR};
  `}
  width: 100%;
  margin-bottom: 24px;
`;

export const DateTimeTitle = styled.Text`
  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_100};
    font-size: ${theme.FONT_SIZE.SM}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
  `}
  width: 100%;
  margin-bottom: 8px;
`;

export const CenteredView = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  padding: 0 24px 0 24px;
  background-color: ${({ theme }) => theme.COLORS.MODAL_BACKGROUND};
`;

export const ModalView = styled.View`
  width: 100%;
  height: 192px;
  background-color: ${({ theme }) => theme.COLORS.GRAY_700};
  border-radius: 8px;
  justify-content: center;
  align-items: center;
  padding: 40px 24px 24px 24px;
`;

export const ModalText = styled.Text`
  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_200};
    font-size: ${theme.FONT_SIZE.LG}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
  `}
  width: 100%;
  text-align: center;
  margin-bottom: 32px;
`;

export const SingleButtonContainter = styled.View`
  width: 48%;
`;

export const ButtonsContainer = styled.View`
  flex-direction: row;
  width: 100%;
  justify-content: space-between;
`;
