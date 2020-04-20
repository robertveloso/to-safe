import React from "react";
import { StatusBar, View } from "react-native";
import { MaterialIcons as Icon } from "@expo/vector-icons";
import { useSelector } from "react-redux";

import { useNavigation } from "@react-navigation/native";

// import timeZone from "config/timezoneConfig";
import colors from "styles/colors";

import CarIcon from "assets/icons/car.png";
import HeartIcon from "assets/icons/heart.png";
import HouseIcon from "assets/icons/house.png";
import CurrencyIcon from "assets/icons/currency.png";
import PlaneIcon from "assets/icons/plane.png";
import PhoneIcon from "assets/icons/phone.png";

import {
  Container,
  TitleContainer,
  BigTitle,
  BackButton,
  Content,
  Card,
  Title,
  Image,
} from "./styles";

export default function Chat() {
  const auth = useSelector((state) => state.auth);
  const navigation = useNavigation();

  return (
    <Container>
      <StatusBar backgroundColor={colors.primary} barStyle="light-content" />
      <TitleContainer onPress={() => navigation.navigate("Home")}>
        <Icon name="arrow-back" color={"#171d33"} size={20} />
        <BackButton>Voltar</BackButton>
      </TitleContainer>
      <TitleContainer>
        <Image source={HeartIcon} />
        <BigTitle>Seguro de Vida</BigTitle>
      </TitleContainer>
      <Content>
        <CTA>Recomendado</CTA>
        <Title>Vida Inteira Resgatável</Title>
        <Text>
          Trata-se de um produto de seguro vitalício, sem alteração no valor do
          prêmio e com acumulação de reserva. A reserva pode ser utilizada em
          caso de emergência, tendo como consequência a redução do valor do
          benefício o cancelamento do plano. Capital Segurado máximo de R$
          500.000,00
        </Text>
      </Content>
    </Container>
  );
}
