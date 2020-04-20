import React, { useState, useEffect } from "react";
import { ScrollView } from "react-native";
import { useRoute, useNavigation } from "@react-navigation/native";
import { MaterialIcons as Icon } from "@expo/vector-icons";
import { useDispatch, useSelector } from "react-redux";

// import { parseISO, format } from "date-fns";

import Avatar from "components/Avatar";
import NamePhoto from "components/NamePhoto";
import Service from "components/Service";
import Wallet from "components/Wallet";
import Promotions from "components/Promotions";
import ConsultarPerfil from "components/ConsultarPerfil";

import api from "services/api";
import { signOut } from "store/modules/auth/actions";
import colors from "styles/colors";

import {
  Container,
  Services,
  Profile,
  Welcome,
  Name,
  ActionContainer,
  TitleContainer,
  Menu,
  MenuTitle,
  Options,
  Option,
  List,
} from "./styles";

export default function Home() {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const profile = useSelector((state) => state?.user?.profile);
  const auth = useSelector((state) => state.auth);

  function handleLogout() {
    dispatch(signOut());
  }

  useEffect(() => {
    async function loadServices() {
      if (!auth.id) return;
      //

      // setServices(data);
    }
    loadServices();
  }, [auth.id]);

  return (
    <Container>
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        <Profile>
          <ActionContainer>
            {profile?.avatar ? (
              <Avatar source={{ uri: profile?.avatar?.url }} />
            ) : (
              <>{profile?.name && <NamePhoto name={profile?.name} />}</>
            )}
          </ActionContainer>

          <TitleContainer>
            <Welcome>Bem vindo de volta,</Welcome>
            <Name>{profile?.name}</Name>
          </TitleContainer>

          <ActionContainer>
            <Icon
              onPress={handleLogout}
              name="exit-to-app"
              color={colors.danger}
              size={25}
            />
          </ActionContainer>
        </Profile>

        <Wallet />

        <Menu>
          <MenuTitle>Serviços</MenuTitle>
          <Options>
            <Option
              style={{
                marginRight: 15,
              }}
              onPress={() => navigation.navigate("Servicos")}
            >
              Mostrar tudo
            </Option>
          </Options>
        </Menu>
        <Services>
          <ScrollView horizontal={true}>
            <Service name={"Auto"} icon={"car"} />
            <Service name={"Saúde"} icon={"heart"} />
            <Service name={"Habitacional"} icon={"home"} />
          </ScrollView>
        </Services>

        <Promotions />
        <ConsultarPerfil />

        {/*<List
        data={services}
        keyExtractor={(item) => String(item.id)}
        renderItem={({ item }) => <Services data={item} />}
      />*/}
      </ScrollView>
    </Container>
  );
}
