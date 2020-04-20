import React from "react";

import { TouchableOpacity } from "react-native";

import {
  Container,
  SubContainer,
  Title,
  SubTitle,
  Date,
  Percentage,
} from "./styles";

const Promotion = ({ name, percentage, date }) => {
  return (
    <>
      <SubContainer>
        <SubTitle>Mongreal</SubTitle>
        <Percentage>15%</Percentage>
        <Date>15/03/2019</Date>
      </SubContainer>
    </>
  );
};

export default function Promotions(data) {
  return (
    <Container>
      <Title>Promoções</Title>
      <TouchableOpacity onPress={() => console.tron.log()}>
        <Promotion data={data} />
      </TouchableOpacity>
    </Container>
  );
}
