import React from "react";
import PropTypes from "prop-types";

import CarIcon from "assets/icons/car.png";
import HeartIcon from "assets/icons/heart.png";
import HouseIcon from "assets/icons/house.png";

import { Container, Image, ServiceText } from "./styles";

export default function Service({ name, ...rest }) {
  return (
    <Container {...rest}>
      {name === "Saúde" ? (
        <Image source={HeartIcon} />
      ) : name === "Auto" ? (
        <Image source={CarIcon} />
      ) : (
        <Image source={HouseIcon} />
      )}
      <ServiceText>{name}</ServiceText>
    </Container>
  );
}

Service.propTypes = {
  name: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
};
