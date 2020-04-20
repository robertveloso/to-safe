import styled from "styled-components/native";

export const Container = styled.View`
  align-items: center;
  justify-content: center;
  background: #f0f1f4;
  border-radius: 6px;
  width: 125px;
  height: 100px;
  margin-left: 5px;
  margin-right: 5px;
`;

export const Image = styled.Image`
  position: absolute;
  width: 32px;
  height: 32px;

  top: 25px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`;

export const ServiceText = styled.Text`
  position: absolute;
  height: 40px;
  bottom: -4px;

  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 20px;
  /* or 143% */

  text-align: center;
  letter-spacing: 0.2px;

  color: #000000;
`;
