import Styles from "./Footer.module.scss";
import { Input } from "../inputs/Inputs.style";
import Button from "components/button";
import { FileArrowDown } from "phosphor-react";

const Footer: React.FC = () => (
  <div className={Styles.container}>
    <div className={Styles.childContainer}>
      <div className={Styles.column}>
        <div className={Styles.typerguy}>Typerguy.io</div>
        <div>
          I'm a frontend developer passionate about building high performance
          frontend solutions.
        </div>
        <div style={{ marginTop: 18 }}>
          <Button onClick={() => {}}>
            <FileArrowDown size={25} weight="fill" />
            DOWNLOAD RESUME
          </Button>
        </div>
      </div>

      <div className={Styles.column}>
        <p className={Styles.title}>INSTITUCIONAL</p>
        <div className={Styles.columnChild}>
          <span>Uma Coisa</span>
          <span>Outra coisa</span>
          <span>Coisda</span>
          <span>Outraas</span>
        </div>
      </div>

      <div className={Styles.column}>
        <p className={Styles.title}>AJUDA</p>
        <div className={Styles.columnChild}>
          <span>Termos e Condições</span>
          <span>Politicas de privacidade</span>
          <span>FQA</span>
          <span>Sugestões</span>
        </div>
      </div>

      <div className={Styles.column}>
        <p className={Styles.title}>NEWSLATTER</p>
        <Input placeholder="Seu Email" />
        <div style={{ marginTop: 20 }}>
          <Button onClick={() => {}}>SUBSCRIBE</Button>
        </div>
      </div>
    </div>
    <p style={{ color: "#8a8a8a" }}>
      © 2022 Caffeína, Todos os direitos reservados
    </p>
  </div>
);

export default Footer;
