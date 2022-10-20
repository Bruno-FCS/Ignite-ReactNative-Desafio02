import styled, { css } from "styled-components/native";
import { TextInput } from "react-native";

export type DataInputTypeStyleProps = "PRIMARY" | "SECONDARY";

type Props = {
  type: DataInputTypeStyleProps;
};

export const Input = styled(TextInput)<Props>`
  ${({ theme, type }) => css`
    border-color: ${({ theme }) => theme.COLORS.GRAY_500};
    color: ${theme.COLORS.GRAY_100};
    font-family: ${theme.FONT_FAMILY.REGULAR};
    font-size: ${theme.FONT_SIZE.MD}px;
    min-height: ${type === "PRIMARY" ? "48px" : "120px"};
    max-height: ${type === "PRIMARY" ? "48px" : "120px"};
  `}

  width: 100%;
  padding: 14px;
  border-radius: 6px;
  border-width: 1px;
`;
