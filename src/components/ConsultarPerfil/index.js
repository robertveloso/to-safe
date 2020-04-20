import React, { useState } from "react";
import { Alert } from "react-native";
import { MaterialIcons as Icon } from "@expo/vector-icons";

import { consultaCPF, consultaCNPJ } from "../../services/api";

import { Container, Title, SubTitle, CTA, TInput, Button } from "./styles";

export default function ConsultarPerfil() {
  const [doc, setDoc] = useState("32257142000125");

  async function handleSearch(e) {
    e.preventDefault();
    let response = null;
    if (doc.length === 11) {
      response = await consultaCPF.get(`${doc}`, {
        headers: { "X-API-KEY": "7648115a-c47a-4c5b-a281-1d61b942e738" },
      });
    } else {
      response = await consultaCNPJ.get(`${doc}`, {
        headers: { "X-API-KEY": "d75baf1f-78b6-4081-8ed3-b92d667f3a99" },
      });
    }
    console.tron.log(response);
    Alert.alert(
      `Situação do ${response.data.nome_empresarial} está ${response.data.situacao_cadastral.codigo} `
    );
  }

  return (
    <Container>
      <Title>Consultar Perfil</Title>
      <SubTitle>Consulte o perfil e o histórico do seu cliente</SubTitle>
      <CTA>Digite o CPF ou CNPJ</CTA>
      <TInput
        type="default"
        value={doc}
        onChange={(e) => setDoc(e.target.value)}
      />
      <Button onPress={(e) => handleSearch(e)}>
        <Icon name="search" color={"#000"} size={20} />
      </Button>
    </Container>
  );
}
