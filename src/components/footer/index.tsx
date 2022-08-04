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
        <div>
          <Button onClick={() => {}}>
            <FileArrowDown size={25} weight="fill" />
            DOWNLOAD RESUME
          </Button>
        </div>
      </div>

      <div className={Styles.column}>
        <div className={Styles.title}>PERSONAL NETWORKS</div>
        <div className={Styles.columnChild}>
          <span>FACEBOOK</span>
          <span>INSTAGRAM</span>
          <span>TWITTER</span>
        </div>
      </div>

      <div className={Styles.column}>
        <div className={Styles.title}>PROFISSIONAL NETWORKS</div>
        <div className={Styles.columnChild}>
          <span>LINKEDIN</span>
          <span>GITHUB</span>
          <span>MEDIUM</span>
        </div>
      </div>
    </div>
    <p style={{ color: "#8a8a8a" }}>© 2022 Typerguy, All rights reserved</p>
  </div>
);

export default Footer;
