import { TextInputProps } from "react-native";

import { DataInputTypeStyleProps, Input } from "./styles";

type Props = TextInputProps & {
  type?: DataInputTypeStyleProps;
};

export const DataInput = ({ type = "PRIMARY", ...rest }: Props) => {
  return <Input type={type} {...rest} />;
};
