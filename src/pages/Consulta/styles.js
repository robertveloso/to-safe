import styled from "styled-components/native";

import colors from "styles/colors";

export const Container = styled.SafeAreaView`
  flex: 1;
  background: #fff;
`;

export const TitleContainer = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  margin-bottom: 10px;
`;

export const BackButton = styled.Text`
  color: #fff;
  margin-left: 10px;
  font-weight: 500;
  font-size: 14px;
  color: #171d33;
`;

export const BigTitle = styled.Text`
  /* Serviços */
  margin: 20px;
  margin-left: 5px;
  font-style: normal;
  font-weight: bold;
  font-size: 25px;
  line-height: 33px;
  /* identical to box height */

  display: flex;
  align-items: center;

  color: #120e21;
`;

export const Content = styled.View`
  margin: 20.5px;
  flex: 1;
`;

export const CTA = styled.Text`
  font-style: normal;
  font-weight: 300;
  font-size: 12.8px;

  /* or 20px */

  display: flex;
  align-items: center;

  color: #99879d;
`;

export const Title = styled.Text`
  font-style: normal;
  font-weight: bold;
  font-size: 25px;
  /* identical to box height */

  display: flex;
  align-items: center;

  color: #120e21;
`;

export const Text = styled.Text`
  margin-top: 30px;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  /* or 26px */

  color: #99879d;
`;

export const Titled = styled.Text`
  position: absolute;
  align-self: center;
  top: 100px;

  color: #3b414b;
  margin-left: 10px;
  font-weight: 500;
  font-size: 14px;
  /* or 143% */
`;

export const Image = styled.Image`
  width: 36px;
  height: 36px;
  margin-left: 10px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`;
