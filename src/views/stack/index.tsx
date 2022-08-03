import { Container, ExperiecesContainer, Title } from "./Stacks.styles";
import ExperienceCard from "../../components/framework";
import Data from "../../data/techs.json";

const Experiences: React.FC = () => {
  return (
    <Container>
      <div>
        <Title>All tecnologies, frameworks and languages i use</Title>
      </div>
      <ExperiecesContainer>
        {Data.languages.map((lang) => (
          <ExperienceCard key={lang.techKey} {...lang} />
        ))}
      </ExperiecesContainer>
    </Container>
  );
};

export default Experiences;
