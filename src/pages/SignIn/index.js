import React, { useRef } from "react";
import { Image, StatusBar, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useDispatch, useSelector } from "react-redux";

import { Form } from "@unform/mobile";

import logo from "assets/logo.png";
import { signInRequest } from "store/modules/auth/actions";
import colors from "styles/colors";

import {
  Container,
  Text,
  SigunUpText,
  User,
  Password,
  SubmitButton,
} from "./styles";

export default function SignIn() {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.auth.loading);
  const formRef = useRef(null);

  function handleSubmit({ email, password }, { reset }) {
    dispatch(signInRequest(email, password));
    reset();
  }

  return (
    <Container>
      <StatusBar backgroundColor={colors.primary} />
      <Image source={logo} />
      <Text>Tô Safe</Text>
      <Form ref={formRef} onSubmit={handleSubmit}>
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
          placeholder="Informe sua senha"
          autoCorrect={false}
          returnKeyType="send"
          autoCapitalize="none"
        />
        <SubmitButton
          loading={loading}
          onPress={() => formRef.current.submitForm()}
        >
          Entrar
        </SubmitButton>
        <TouchableOpacity onPress={() => navigation.navigate("SignUp")}>
          <SigunUpText>ou cadastre-se</SigunUpText>
        </TouchableOpacity>
      </Form>
    </Container>
  );
}
