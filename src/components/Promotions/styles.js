import styled from "styled-components/native";

export const Container = styled.View`
  margin: 10px;
  height: 210px;
  background: #ffffff;
  border-radius: 8px;
  margin-top: 20px;
  box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.25);
`;
export const SubContainer = styled.View`
  margin: 10px;
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

export const Title = styled.Text`
  margin: 15px;
  font-style: normal;
  font-weight: bold;
  font-size: 20px;

  align-items: center;

  color: #120e21;
`;

export const SubTitle = styled.Text`
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  /* identical to box height */

  align-items: flex-start;
  margin-left: 5px;
  text-align: left;

  color: #120e21;
`;

export const Percentage = styled.Text`
  font-style: normal;
  font-weight: normal;
  font-size: 12px;

  /* identical to box height */

  flex: 1;
  margin-left: 5px;
  text-align: left;

  color: #b11c1c;
`;

export const Date = styled.Text`
  font-style: normal;
  font-weight: normal;
  font-size: 12.8px;

  /* or 20px */

  flex: 1;
  align-items: flex-end;
  text-align: right;

  color: #99879d;
`;
