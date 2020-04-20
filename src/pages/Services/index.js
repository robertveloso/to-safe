import React from "react";
import { StatusBar, View } from "react-native";
import { MaterialIcons as Icon } from "@expo/vector-icons";
import { useSelector } from "react-redux";

import { useNavigation } from "@react-navigation/native";

import timeZone from "config/timezoneConfig";
import api from "services/api";
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

export default function Services() {
  const auth = useSelector((state) => state.auth);
  const navigation = useNavigation();

  return (
    <Container>
      <StatusBar backgroundColor={colors.primary} barStyle="light-content" />
      <TitleContainer onPress={() => navigation.navigate("Home")}>
        <Icon name="arrow-back" color={"#171d33"} size={20} />
        <BackButton>Voltar</BackButton>
      </TitleContainer>
      <BigTitle>Serviços</BigTitle>
      <Content>
        <Card onPress={() => navigation.navigate("Consultas")}>
          <Image source={HeartIcon} />
          <Title>Saúde</Title>
        </Card>

        <Card>
          <Image source={HouseIcon} />
          <Title>Habitacional</Title>
        </Card>

        <Card>
          <Image source={CarIcon} />
          <Title>Auto</Title>
        </Card>
        <Card>
          <Image source={PlaneIcon} />
          <Title>Viagem</Title>
        </Card>
        <Card>
          <Image source={PhoneIcon} />
          <Title>Bens</Title>
        </Card>
        <Card>
          <Image source={CurrencyIcon} />
          <Title>Previdência</Title>
        </Card>
      </Content>
    </Container>
  );
}
