import styled from "styled-components/native";

import Button from "components/Button";
import { Input as UnInput } from "components/Form";

export const Container = styled.View`
  background: #ffffff;
  flex: 1;

  justify-content: center;
  align-items: center;

  padding: 0 25px;
`;

export const Text = styled.Text`
  font-style: normal;
  font-weight: normal;
  font-size: 36px;
  line-height: 40px;
  display: flex;
  align-items: center;
  text-align: center;
`;

export const SigunUpText = styled.Text`
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 40px;
  display: flex;
  align-items: center;
  text-align: center;
`;

export const User = styled(UnInput)`
  margin-top: 37.5px;
  margin-bottom: 5px;
  border: 2px solid #000000;
`;

export const Password = styled(UnInput)`
  margin-top: 5px;
  margin-bottom: 15px;
  border: 2px solid #000000;
`;

export const SubmitButton = styled(Button)`
  background: #7248e8;
  width: 100%;
  margin-top: 15.5px;
`;
