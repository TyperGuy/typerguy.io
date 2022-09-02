import {
  Container,
  Subtitle,
  Title,
  StartupCard,
  Link,
  Flex,
  StartupLogo,
  Startupexplanation,
} from "./Projects.styles";
import ProjectCard from "../../components/project";
import { ArrowSquareOut } from "phosphor-react";

const Startups: React.FC = () => {
  return (
    <Container>
      <StartupCard>
        <StartupLogo src="./caffeina.png"/>
        <Startupexplanation>
          I'm a frontend developer passionate about building high performance
          frontend solutions.
        </Startupexplanation>
        <Flex>
          <Link>www.caffeina.org</Link>
          <ArrowSquareOut size={18} weight="fill" color="#4361ee" />
        </Flex>
      </StartupCard>
    </Container>
  );
};

export default Startups;
