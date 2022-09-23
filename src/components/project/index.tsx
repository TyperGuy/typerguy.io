import { useState } from "react";
import { ArrowSquareOut } from "phosphor-react";
import {
  Container,
  Description,
  Footer,
  GitHub,
  Link,
  Title,
} from "./Project.styles";
import Loader from '../loaders/skeleton/Card';
import { FaGithubAlt } from "react-icons/fa";

const Project: React.FC = () => {
  const [isLoading,setIsLoading] = useState(true);

  return (
    <Container>
      <Title>Ministério ao</Title>
      <Description>
        An all-in-one starter kit for high-performance e-commerce sites.
        starter.
      </Description>
      <Footer>
        <div
          style={{
            display: "flex",
            gap: "10px",
            alignItems: "center",
          }}
        >
          <GitHub>
            <FaGithubAlt size={18} />
          </GitHub>
          <Link>
            <ArrowSquareOut size={18} weight="fill" />
          </Link>
        </div>
      </Footer>
    </Container>
  );
};

export default Project;


