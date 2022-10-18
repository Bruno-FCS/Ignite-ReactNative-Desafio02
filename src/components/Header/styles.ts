import styled from "styled-components/native";
import { UserCircle } from "phosphor-react-native";

export const Container = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const Logo = styled.Image`
  width: 82px;
  height: 37px;
`;

export const UserIcon = styled(UserCircle).attrs(({ theme }) => ({
  size: 40,
  color: theme.COLORS.GRAY_200,
}))``;
