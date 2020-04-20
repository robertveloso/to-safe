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
  line-height: 20px;
  color: #171d33;
`;

export const BigTitle = styled.Text`
  /* Serviços */
  margin: 20px;
  margin-left: 15px;
  font-style: normal;
  font-weight: 900;
  font-size: 39.06px;

  /* identical to box height, or 108% */

  letter-spacing: 0.5px;

  /* black */

  color: #171d33;
`;

export const Content = styled.View`
  margin-top: 20.5px;
  flex: 1;
  flex-direction: row;
  flex-wrap: wrap;
`;

export const Card = styled.TouchableOpacity`
  background: #fff;
  margin: 0 5px;
  margin-bottom: 20px;
  padding: 15px 30px 0 15px;

  border: 1px solid #eee;
  box-shadow: 0px 4px 26px rgba(0, 0, 0, 0.06);
  border-radius: 6px;

  width: 47.5%;
  height: 140px;
`;

export const Title = styled.Text`
  position: absolute;
  align-self: center;
  top: 100px;

  color: #3b414b;
  margin-left: 10px;
  font-weight: 500;
  font-size: 14px;
  line-height: 20px;
  /* or 143% */
`;

export const Image = styled.Image`
  position: absolute;
  width: 36px;
  height: 36px;
  text-align: center;
  justify-content: center;
  align-self: center;
  top: 50px;

  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`;
