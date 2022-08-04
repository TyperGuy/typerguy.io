import { ArrowSquareOut } from "phosphor-react";
import {
  Container,
  Cover,
  Description,
  Flex,
  Footer,
  GitHub,
  Link,
  Tecnology,
  Title,
} from "./Project.styles";
import { FaGithubAlt } from "react-icons/fa";

const Project: React.FC = () => {
  return (
    <Container>
      <Cover src={"/cover.webp"} />
      <Title>Ministério ao</Title>
      <Description>
        An all-in-one starter kit for high-performance e-commerce sites.
      </Description>
      <Footer>
        <Flex>
          <Tecnology />
          <span>Typescript</span>
        </Flex>
        <div
          style={{
            display: "flex",
            gap: "10px",
            alignItems: "center",
          }}
        >
          <GitHub>
            <FaGithubAlt size={22} />
          </GitHub>
          <Link>
            <ArrowSquareOut size={22} weight="fill" />
          </Link>
        </div>
      </Footer>
    </Container>
  );
};

export default Project;
