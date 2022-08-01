import {
  Container,
  ExperiecesContainer,
  Subtitle,
  Title,
} from "./Projects.styles";
import ExperienceCard from "../../components/framework";

const Experiences: React.FC = () => {
  return (
    <Container>
      <div>
        <Title>All tecnologies, frameworks and languages i use</Title>
      </div>
      <ExperiecesContainer>
        <ExperienceCard />
      </ExperiecesContainer>
    </Container>
  );
};

export default Experiences;
