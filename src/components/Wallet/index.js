import React from "react";

import WalletIcon from "assets/icons/wallets.png";

import { Container, Image, Title, SubTitle, CTA } from "./styles";

export default function Wallet() {
  return (
    <Container>
      <Title>Prospects</Title>
      <SubTitle>3 novos prospects</SubTitle>
      <Image source={WalletIcon} />
      <CTA>Abrir</CTA>
    </Container>
  );
}
