import type { NextPage } from "next";
import React from "react";
import FloatingButton from "components/widgets/landing-page-float-buttons";
import Calltoaction from "../views/calltoaction/";
import Body from "../views/content-body";
import Stats from "components/banner";

const Home: NextPage = () => {
  return (
    <div
      id="float"
      style={{
        maxWidth: "100vw",
        display: "flex",
        height: "auto",
        flexDirection: "column",
        alignItems: "center",
        backgroundColor:'#fff'
      }}
    >
      <Calltoaction />
      <Stats />
      <Body />
      <FloatingButton />
    </div>
  );
};

export default Home;
