import { Title, Subtitle } from "./styles";

type Props = {
  title: string;
  subtitle: string;
};

export const PercentageCardContent = ({ title, subtitle }: Props) => {
  return (
    <>
      <Title>{title}</Title>
      <Subtitle>{subtitle}</Subtitle>
    </>
  );
};
