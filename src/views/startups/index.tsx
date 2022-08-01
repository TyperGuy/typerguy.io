import {
  Container,
  Subtitle,
  Title,
  StartupCard,
  Link,
  Flex,
  Startupname,
  Startupexplanation,
} from "./Projects.styles";
import ProjectCard from "../../components/project";
import { ArrowSquareOut } from "phosphor-react";

const Startups: React.FC = () => {
  return (
    <Container>
      <div>
        <Title>Find here all startups founded by me</Title>
        <Subtitle></Subtitle>
      </div>
      <StartupCard>
        <Startupname>Esse é o meu Titulo</Startupname>
        <Startupexplanation>
          I'm a frontend developer passionate about building high performance
          frontend solutions.
        </Startupexplanation>
        <Flex>
          <Link>www.agiliza.me</Link>
          <ArrowSquareOut size={18} weight="fill" />
        </Flex>
      </StartupCard>
    </Container>
  );
};

export default Startups;
