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

export const Title = styled.Text`
  font-style: normal;
  font-weight: normal;
  font-size: 36px;
  line-height: 40px;
  display: flex;
  align-items: center;
  text-align: center;
`;

export const Name = styled(UnInput)`
  margin-top: 37.5px;
  margin-bottom: 5px;
  border: 2px solid #000000;
`;

export const User = styled(UnInput)`
  margin-top: 5px;
  margin-bottom: 10px;
  border: 2px solid #000000;
`;

export const Password = styled(UnInput)`
  margin-bottom: 15px;
  border: 2px solid #000000;
`;

export const ReturnButton = styled.Text`
  color: #000;
  margin-top: 50px;
  margin-left: 10px;
`;

export const SubmitButton = styled(Button)`
  background: #7248e8;
  width: 100%;
  margin-top: 15.5px;
`;
