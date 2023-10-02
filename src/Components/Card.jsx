import React from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 360px;
  margin-bottom: 45px;
  cursor: pointer;
`;

const Image = styled.img`
  width: 100%;
  height: 202px;
  background-color: #817e7e;
`;

const Card = () => {
  return (
    <Container>
      <Image src="../cat.jpg"/>

export default Card;
