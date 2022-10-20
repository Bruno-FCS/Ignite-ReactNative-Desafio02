import { Label } from "./styles";

type Props = {
  title: string;
};

export const DataInputLabel = ({ title }: Props) => {
  return <Label>{title}</Label>;
};
