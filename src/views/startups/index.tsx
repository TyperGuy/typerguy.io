import {
  Container,
  Subtitle,
  Title,
  StartupCard,
  Link,
  Flex,
} from "./Projects.styles";
import ProjectCard from "../../components/project";
import { ArrowSquareOut } from "phosphor-react";

const Startups: React.FC = () => {
  return (
    <Container>
      <div>
        <Title>Find my projects here</Title>
        <Subtitle>You can use these projects to evaluate my works</Subtitle>
      </div>
      <StartupCard>
        <Title>Esse é o meu Titulo</Title>
        <Subtitle>
          I'm a frontend developer passionate about building high performance
          frontend solutions.
        </Subtitle>
        <Flex>
          <Link>www.agiliza.me</Link>
          <ArrowSquareOut size={18} weight="fill" />
        </Flex>
      </StartupCard>
    </Container>
  );
};

export default Startups;
