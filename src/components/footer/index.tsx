import Styles from "./Footer.module.scss";
import { Input } from "../inputs/Inputs.style";
import Button from "components/button";
import { FileArrowDown } from "phosphor-react";

const Footer: React.FC = () => (
  <div className={Styles.container}>
    <div className={Styles.childContainer}>
      <div className={Styles.column}>
        <div className={Styles.typerguy}>TyperGuy.io</div>
        <div>
          I'm a frontend developer passionate about building high performance
          frontend solutions.
        </div>
        <div>
          <Button onClick={() => {}}>
            <FileArrowDown size={25} weight="fill" />
            GET RESUME
          </Button>
        </div>
      </div>

      <div className={Styles.column}>
        <div className={Styles.title}>PERSONAL NETWORKS</div>
        <div className={Styles.columnChild}>
          <a href="https://www.facebook.com/roger.freta" target="_blank" title="My Facebook">FACEBOOK</a>
          <a href="https://www.instagram.com/typerrguy/" target="_blank" title="My Instagram">INSTAGRAM</a>
          <a href="https://twitter.com/typerrguy" target="_blank" title="My Twitter">TWITTER</a>
        </div>
      </div>

      <div className={Styles.column}>
        <div className={Styles.title}>PROFISSIONAL NETWORKS</div>
        <div className={Styles.columnChild}>
          <a href="https://www.linkedin.com/in/rjtony/" target="_blank" title="My Linkedin">LINKEDIN</a>
          <a href="https://github.com/TyperGuy" target="_blank" title="My Github">GITHUB</a>
          <a href="https://medium.com/@ray.developper" target="_blank" title="My Medium">MEDIUM</a>
          <a href="https://stackoverflow.com/users/18569005/typerguy" target="_blank" title="My StackOverFlow">Stackoverflow</a>
        </div>
      </div>
    </div>
    <p style={{ color: "#8a8a8a" }}>© 2022 Typerguy, All rights reserved</p>
  </div>
);

export default Footer;
