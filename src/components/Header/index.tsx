import { Container, Logo, UserIcon } from "./styles";

import logoImg from "@assets/logo.png";

export const Header = () => {
  return (
    <Container>
      <Logo source={logoImg} />
      <UserIcon />
    </Container>
  );
};
