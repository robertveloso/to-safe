import React from "react";
import { StatusBar, Alert } from "react-native";
import { MaterialIcons as Icon } from "@expo/vector-icons";
import { useSelector } from "react-redux";

import { useNavigation } from "@react-navigation/native";

// import timeZone from "config/timezoneConfig";
import colors from "styles/colors";

import HeartIcon from "assets/icons/heart.png";

import { mongeral, consultaCNPJ } from "../../services/api";

import {
  Container,
  TitleContainer,
  BigTitle,
  BackButton,
  Content,
  Card,
  Title,
  Image,
  CTA,
  Text,
} from "./styles";
import { TouchableOpacity } from "react-native-gesture-handler";

export default function Consulta() {
  const auth = useSelector((state) => state.auth);
  const navigation = useNavigation();

  async function handleSearch() {
    const response = await mongeral.get(`&cnpj=32257142000125`, {
      headers: { "X-API-KEY": "d6395df3-35a7-49e9-921f-d8b14a38c940" },
    });

    const responseCNPJ = await consultaCNPJ.get(`32257142000125`, {
      headers: { "X-API-KEY": "d75baf1f-78b6-4081-8ed3-b92d667f3a99" },
    });

    Alert.alert(
      `Situação do ${responseCNPJ.data.nome_empresarial}, data de abertura ${responseCNPJ.data.data_abertura} `
    );

    Alert.alert(
      `Resultado requisiçao Mongeral ${JSON.stringify(response.data)} `
    );
  }

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
        <TouchableOpacity onPress={() => handleSearch()}>
          <Text>Obter dados da api.</Text>
        </TouchableOpacity>
      </Content>
    </Container>
  );
}
