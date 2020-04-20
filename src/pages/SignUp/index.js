import React, { useRef } from "react";
import { Image, StatusBar, TouchableOpacity } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { useNavigation } from "@react-navigation/native";
import { Form } from "@unform/mobile";

import logo from "assets/logo.png";
import { signUpRequest } from "store/modules/auth/actions";
import colors from "styles/colors";

import {
  Container,
  Title,
  User,
  Name,
  Password,
  ReturnButton,
  SubmitButton,
} from "./styles";

export default function SignUp() {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.auth.loading);
  const formRef = useRef(null);

  function handleSubmit({ email, password, displayName }, { reset }) {
    dispatch(signUpRequest(email, password, displayName));
    reset();
  }

  return (
    <Container>
      <StatusBar backgroundColor={colors.primary} />
      <TouchableOpacity
        style={{ position: "absolute", top: 0, left: 0 }}
        onPress={() => navigation.navigate("SignIn")}
      >
        <ReturnButton>Voltar</ReturnButton>
      </TouchableOpacity>
      <Image source={logo} />
      <Title>Cadastre-se</Title>
      <Form ref={formRef} onSubmit={handleSubmit}>
        <Name
          name="displayName"
          keyboardType="default"
          placeholder="Informe seu nome"
          autoCorrect={false}
          returnKeyType="send"
          autoCapitalize="none"
        />
        <User
          name="email"
          keyboardType="email"
          placeholder="Informe seu email"
          autoCorrect={false}
          returnKeyType="send"
          autoCapitalize="none"
        />
        <Password
          name="password"
          keyboardType="default"
          secureTextEntry={true}
          password={true}
          placeholder="Informe sua senha"
          autoCorrect={false}
          returnKeyType="send"
          autoCapitalize="none"
        />
        <SubmitButton
          loading={loading}
          onPress={() => formRef.current.submitForm()}
        >
          Inscreva-se
        </SubmitButton>
      </Form>
    </Container>
  );
}
