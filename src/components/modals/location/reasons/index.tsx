// @ts-nocheck
import { FC } from "react";
import {
  Section,
  Content,
  Title,
  Description,
  Button,
  Span,
  Linker,
} from "./modal.styles";
import Toogle from "../../../toogleButton";

const Settings: React.FC<{
  setShowModal: (showModal: boolean) => void;
  setTargetModal: (status: string) => void;
}> = ({ setTargetModal, setShowModal }) => {
  return (
    <Content>
      <div
        style={{
          width: "80%",
          marginTop: "10px",
          display: "flex",
          gap: 10,
          alignItems: "center",
        }}
      >
        <Title>Why do i need your location?</Title>
      </div>
      <div
        style={{
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <p
          style={{
            width: "80%",
            textAlign: "justify",
          }}
        >
          I've been working as a freelance developer in Angola since 2016. Now
          I'm at a stage in my career where I want to make the leap to
          international markets, and luckily I've done very well. For the sake
          of studying my international reach, I collect data such as continent
          and country from people who visit my website and with this information
          I can measure how far I have come. <br />
          <br />
          The data collected are solely and exclusively: Continent, Country and
          Province. No personal data is collected, thus not allowing location
          data to be cross-referenced with personal identity. <br />
          Important to say that this information is not shared with anyone but
          me. <br />
          <br />
          By clicking authorize, you agree to share this data, otherwise no
          location data will be collected as your privacy is a matter I take
          very seriously! <br />
          <br />
          <b>Thanks!</b>
        </p>
      </div>
      <div
        style={{
          width: "80%",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          gap: "1rem",
        }}
      >
        <Span onClick={() => setTargetModal("askModal")}>Back</Span>
        <Button onClick={() => setShowModal(false)}>AUTHORIZE</Button>
      </div>
    </Content>
  );
};

export default Settings;
