import styled from "styled-components/native";

export const Container = styled.View`
  margin: 10px;
  height: 210px;
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
  top: 12.02%;
  bottom: 75.48%;

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
  top: 33.17%;
  bottom: 56.73%;

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
  left: 7.8%;
  top: 53.37%;
  bottom: 38.94%;

  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 16px;
  /* identical to box height */

  display: flex;
  align-items: center;

  color: #6c6a74;
`;

export const TInput = styled.TextInput`
  position: absolute;
  left: 7.52%;
  right: 22.28%;
  top: 66.83%;
  bottom: 17.79%;

  background: #ffffff;
  border: 1px solid rgba(0, 0, 0, 0.45);

  border-radius: 4px;
`;

export const Button = styled.TouchableOpacity`
  position: absolute;
  left: 315px;
  right: 29px;
  top: 139px;

  justify-content: center;
  align-items: center;

  width: 32px;
  height: 32px;

  /* purple */

  background: #613eea;
  /* purple button shadow */

  box-shadow: 0px 8px 20px rgba(97, 62, 234, 0.32);
  border-radius: 6px;
`;
