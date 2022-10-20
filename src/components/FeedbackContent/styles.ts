import styled, { css } from "styled-components/native";

export type FeedbackContentTypeStyleProps = "PRIMARY" | "SECONDARY";

type Props = {
  type: FeedbackContentTypeStyleProps;
};

type Bold = {
  bold?: boolean;
};

export const Title = styled.Text<Props>`
  ${({ theme, type }) => css`
    color: ${type === "PRIMARY"
      ? theme.COLORS.GREEN_DARK
      : theme.COLORS.RED_DARK};
    font-size: ${theme.FONT_SIZE.XL}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
  `}

  margin-bottom: 8px;
`;

export const Subtitle = styled.Text<Bold>`
  ${({ theme, bold }) => css`
    color: ${theme.COLORS.GRAY_100};
    font-size: ${theme.FONT_SIZE.MD}px;
    font-family: ${bold ? theme.FONT_FAMILY.BOLD : theme.FONT_FAMILY.REGULAR};
  `}
`;

export const Image = styled.Image`
  width: 224px;
  height: 288px;
  margin-bottom: 32px;
`;
