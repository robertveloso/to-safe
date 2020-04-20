import styled from "styled-components/native";

export const Container = styled.View`
  margin: 10px;
  height: 100px;
  background: #ffffff;
  border-radius: 8px;
  margin-top: 20px;
  box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.25);
`;

export const Image = styled.Image`
  position: absolute;
  width: 22px;
  height: 22px;
  left: 336px;
  top: 30px;

  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`;

export const Title = styled.Text`
  position: absolute;
  left: 6.69%;
  top: 23.53%;
  bottom: 50.98%;

  font-style: normal;
  font-weight: bold;
  font-size: 20px;
  line-height: 26px;
  display: flex;
  align-items: center;

  color: #120e21;
`;
export const SubTitle = styled.Text`
  position: absolute;
  left: 6.69%;
  right: 55.43%;
  top: 56.86%;
  bottom: 22.55%;

  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 21px;
  /* identical to box height */

  display: flex;
  align-items: center;

  color: #613eea;
`;
export const CTA = styled.Text`
  position: absolute;
  left: 83.01%;
  right: 6.69%;
  top: 56.86%;
  bottom: 22.55%;

  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  line-height: 21px;
  /* identical to box height */

  display: flex;
  align-items: center;
  text-align: right;

  color: #613eea;
`;
