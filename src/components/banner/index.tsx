import Button from "components/button";
import Constants from "international/pt-pt/constants.json";
import Image from "next/image";
import React, { useState } from "react";
import Logo from "../../assets/images/logo.png";
import {
  A,
  ChildContainer as Child,
  Container,
  Stats,
  LineDivisor,
} from "./Banner.styles";
import Modal from "../modals/right-side";
import { PresentationChart } from "phosphor-react";

const Styles = {
  title: {
    fontSize: 40,
    fontWeigth: 600,
  },
  content: {
    fontSize: 20,
    opacity: 0.7,
  },
};

const Banner: React.FC = () => {
  return (
    <Container>
      <Child>
        <Stats>
          <PresentationChart size={100} weight="fill" />
          <LineDivisor />
          <div>
            <div style={Styles.title}>US$ 309 bi</div>
            <div style={Styles.content}>Em receitas feitas com palestras</div>
          </div>
          <div>
            <div style={Styles.title}>100+</div>
            <div style={Styles.content}>Países atendidos</div>
          </div>
          <div>
            <div style={Styles.title}>98M+</div>
            <div style={Styles.content}>Clientes verificados</div>
          </div>
        </Stats>
      </Child>
    </Container>
  );
};

export default Banner;
